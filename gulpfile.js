const gulp 			= require("gulp"),
	  sass 			= require("gulp-sass"),
	  autoprefixer 	= require("gulp-autoprefixer"),
	  sourcemaps 	= require('gulp-sourcemaps');
	  browserify 	= require("gulp-browserify"),
	  babelify 		= require("babelify"),
	  buffer 		= require("vinyl-buffer"),
	  uglify 		= require("gulp-uglify"),
	  rename 		= require("gulp-rename"),
	  image 		= require("gulp-image"),
	  browserSync 	= require("browser-sync").create(),
	  browsers		= "last 50 versions";

// html
gulp.task("html", () => {
	return gulp.src("*.html")
		.pipe(browserSync.stream()); // livereload
});

// automatic minify images
gulp.task("imagemin", () => {
	gulp.src("src/images/*")
		.pipe(image())
		.pipe(gulp.dest("dist/images"))
		.pipe(browserSync.stream()); // livereload
});

// compile sass
// automatic browser prefixing
gulp.task("sass", () => {
	return gulp.src("src/sass/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(autoprefixer({browsers}))
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream()); // livereload
});

<<<<<<< HEAD
// babelify
gulp.task("babelify", () => {
	return gulp.src("src/js/*.js")
		.pipe(browserify({
			insertGlobals: true,
			transform: ['babelify']
		}))
		.pipe(buffer())
		.pipe(uglify()) // automatic minify javascript
		.pipe(rename(function (path) {
			path.basename += ".bundle";
			path.extname = ".js"
		}))
		.pipe(gulp.dest("dist/js"))
		.pipe(browserSync.stream()); // livereload
=======
// babel
gulp.task("babel", function () {
	return gulp.src("src/js/*.js")
		.pipe(babel({
			presets: ["es2015", "stage-2", "minify"]
		}))
		.pipe(gulp.dest("public/js"))
		.pipe(browserSync.stream());
>>>>>>> 120439b39f0a7be3bb65c2cf901bab0dc7736a05
});

// watch
gulp.task("watch", () => {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("*.html", ["html", "imagemin"]);
	gulp.watch("src/sass/**/*.scss", ["sass"]);
	gulp.watch("src/js/**/*.js", ["babelify"]);
});

gulp.task("default", ["watch"]);
