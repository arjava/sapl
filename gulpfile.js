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

// automatic minifying images
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
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("dist/css"))
		.pipe(browserSync.stream()); // livereload
});

// babelify
gulp.task("babelify", () => {
	return gulp.src("src/js/*.js")
		.pipe(browserify({
			insertGlobals: true,
			debug: true,
			transform: ['babelify']
		}))
		.pipe(buffer())
		.pipe(uglify()) // automatic minifying javascript
		.pipe(rename(function (path) {
			path.basename += ".bundle";
			path.extname = ".js"
		}))
		.pipe(gulp.dest("dist/js"))
		.pipe(browserSync.stream()); // livereload
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
