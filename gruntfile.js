module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig ({

    // compile sass
    sass: {
      options: {
        outputStyle: "compressed"
      },
      dev: {
        files: {
          "public/css/main.css": "src/sass/*.scss"
        }
      }
    },

    // automatic browser prefixing
    autoprefixer: {
      dist: {
        files: {
          "public/css/main.css" : "public/css/main.css"
        }
      },
      options: {
        browsers: "last 20 versions"
      }
    },

    // babel with minify
    babel: {
      options: {
        presets: ["es2015", "stage-2", "minify"],
      },
      dist: {
        files: {
          "public/js/main.js": "src/js/main.js"
        }
      }
    },// babel

    // watch
    watch: {
      html: {
        files: ["*.html"],
      },
      sass: {
        files: ["src/**/*.scss"],
        tasks: ["sass"]
      },
      autoprefixer: {
        files: ["public/css/main.css"],
        tasks: ["autoprefixer"]
      },
      scripts: {
        files: ["src/js/*.js"],
        tasks: ["babel"]
      },
    },

    // browserSync
    browserSync: {
      bsFiles: {
        src: [
          "*.html", 
          "public/css/*.css", 
          "public/js/*.js"
        ]
      },
      options: {
      watchTask: true,
        server: {
            baseDir: "./"
        }
      }
    }
  });//initConfig

  grunt.registerTask("default", ["browserSync", "watch"]);
};