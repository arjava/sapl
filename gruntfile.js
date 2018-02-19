module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-image");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({

        // automatic minifying html
        htmlmin: {                                     
            dist: {                                      
                options: {                                 
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,       // Enable dynamic expansion.
                    cwd: "src",    // Src matches are relative to this path.
                    src: "*.html",      // Actual pattern(s) to match.
                    dest: "dist",   // Destination path prefix.
                    ext: ".html",        // Dest filepaths will have this extension.
                }]
            }
        },

        // automatic minifying images
        image: {
            dynamic: {
                files: [{
                    expand: true,                     // Enable dynamic expansion.
                    cwd: "src/images/",               // Src matches are relative to this path.
                    src: "*.{png,jpg,jpeg,gif,svg}",  // Actual pattern(s) to match.
                    dest: "dist/images"               // Destination path prefix.
                }]
            }
        },

        // compile sass
        sass: {
            production: {
                options: {
                    sourceMap: true,
                    outputStyle: "compressed"
                },
                files: [{
                    expand: true,       // Enable dynamic expansion.
                    cwd: "src/sass",    // Src matches are relative to this path.
                    src: "*.scss",      // Actual pattern(s) to match.
                    dest: "dist/css",   // Destination path prefix.
                    ext: ".css",        // Dest filepaths will have this extension.
                }]
            }
        },

        // automatic browser prefixing
        autoprefixer: {
            dist: {
                files: {
                    "dist/css/main.css": "dist/css/main.css"
                }
            },
            options: {
                browsers: "last 50 versions"
            }
        },

        // babelify
        browserify: {
            dist: {
                files: [{
                    expand: true,       // Enable dynamic expansion.
                    cwd: "src/js/",     // Src matches are relative to this path.
                    src: "*.js",        // Actual pattern(s) to match.
                    dest: "dist/js",    // Destination path prefix.
                    ext: ".bundle.js",  // Dest filepaths will have this extension.
                }],
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: ["babelify"]
                }
            }
        },

        // automatic minifying javascript
        uglify: {
            my_target: {
                files: [{
                    expand: true,       // Enable dynamic expansion.
                    cwd: "dist/js/",    // Src matches are relative to this path.
                    src: "*.js",        // Actual pattern(s) to match.
                    dest: "dist/js",    // Destination path prefix.
                    ext: ".bundle.js",  // Dest filepaths will have this extension.
                }],
            }
        },

        // watch
        watch: {
            html: {
                files: ["src/*.html"],
                tasks: ["htmlmin","image"]
            },
            sass: {
                files: ["src/**/*.scss"],
                tasks: ["sass"]
            },
            autoprefixer: {
                files: ["src/**/*.scss"],
                tasks: ["autoprefixer"]
            },
            browserify: {
                files: ["src/js/**/*.js"],
                tasks: ["browserify"]
            },
            uglify: {
                files: ["src/js/**/*.js"],
                tasks: ["uglify"]
            },
        },

        // livereload
        browserSync: {
            bsFiles: {
                src: [
                    "dist/*.html",
                    "dist/css/*.css",
                    "dist/js/**/*.js"
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./dist"
                }
            }
        }
    });//initConfig

    grunt.registerTask("default", ["browserSync", "watch"]);
};