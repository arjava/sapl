const gulp 			= require("gulp"),
	  htmlmin 		= require("gulp-htmlmin"),
	  sass 			= require("gulp-sass"),
	  autoprefixer 	= require("gulp-autoprefixer"),
	  sourcemaps 	= require('gulp-sourcemaps'),
	  browserify 	= require("gulp-browserify"),
	  babelify 		= require("babelify"),
	  buffer 		= require("vinyl-buffer"),
	  uglify 		= require("gulp-uglify"),
	  rename 		= require("gulp-rename"),
	  image 		= require("gulp-image"),
	  browserSync 	= require("browser-sync").create(),
	  browsers		= "last 50 versions";

// htmlmin
gulp.task('htmlmin', function () {
	return gulp.src("src/*.html")
		.pipe(htmlmin({ 
			removeComments: true, 
			collapseWhitespace: true
		}))
		.pipe(gulp.dest("dist"));
});

// automatic minifying images
gulp.task("imagemin", () => {
	gulp.src("src/images/*")
		.pipe(image())
		.pipe(gulp.dest("dist/images"))
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
});

// watch
gulp.task("watch", () => {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch("src/*.html", ["htmlmin", "imagemin"]).on('change', browserSync.reload);
	gulp.watch("src/sass/**/*.scss", ["sass"]).on('change', browserSync.reload);
	gulp.watch("src/js/**/*.js", ["babelify"]).on('change', browserSync.reload);
});

gulp.task("default", ["watch"]);
