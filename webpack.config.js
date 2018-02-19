const webpack = require('webpack'),
      path = require("path"),
      glob = require("glob"),
      autoprefixer = require("autoprefixer"),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      browsers = "last 50 versions",
      autoprefixerConfig = autoprefixer({ browsers }),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// multiple entry javascript
const entryObject = glob.sync("./src/js/*.js").reduce(
    function (entries, entry) {
        var matchForRename = /^\.\/src\/js\/([\w\d_]+\/*)\.js$/g.exec(entry);

        if (matchForRename !== null && typeof matchForRename[1] !== "undefined") {
            entries[matchForRename[1]] = entry;
        }

        return entries;
    }, {}
);

// multiple entry HtmlWebpackPlugin
const entry = {
    index: "index",
    index2: "index2"
};

const entryHtmlPlugins = Object.keys(entry).map(function (entryName) {
    return new HtmlWebpackPlugin({
        template: `src/${entryName}.html`,
        filename: `${entryName}.html`,
        inject: false
    })
});

module.exports = {
    entry: entryObject,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },

    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true
    },

    module: {
        rules: [

            //html
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    }
                ],
            },

            // automatic minifying images
            {
                test: /\.(jpe?g|png|gif|svg|otf|ttf|eot|woff|woff2|webm|mp4|mov|mkv|avi)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/"
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            svgo: {
                                options: {
                                    cleanupIDs: true,
                                    convertColors: true,
                                    removeViewBox: true
                                }
                            }
                        }
                    }
                ]
            },

            // compile sass
            // automatic browser prefixing
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: () => {
                                    return autoprefixerConfig;
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                outputStyle: "compressed",
                                sourceMap: true
                            }
                        }
                    ]
                })
            },

            //babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "css/main.css"
        }),

        new UglifyJSPlugin({
            uglifyOptions: {
                beautify: false,
                ecma: 6,
                compress: true,
                comments: false
            }
        })
    ].concat(entryHtmlPlugins)
}