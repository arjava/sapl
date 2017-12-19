var gulp 			= require("gulp"),
	sass 			= require("gulp-sass"),
	babel			= require("gulp-babel"),
	uglify 			= require("gulp-uglify"),
	autoprefixer 	= require("gulp-autoprefixer"),
	browserSync 	= require("browser-sync").create();

// html
gulp.task("html", function() {
	return gulp.src("*.html")
	.pipe(browserSync.reload({ stream : true })); // livereload
});

// compile sass
// automatic browser prefixing
gulp.task("sass", function() {
	return gulp.src("src/sass/**/*.scss")
	.pipe(sass({
		outputStyle: "compressed"
	}).on("error", sass.logError))
	.pipe(autoprefixer({
		browsers : ["last 20 versions"]
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("public/css"))
	.pipe(browserSync.reload({ stream : true })); // livereload
});

// babel
// uglify
gulp.task("babel", function () {
	return gulp.src("src/js/*.js")
	.pipe(babel({
		presets: ["es2015", "stage-2"]
	}))
	.pipe(uglify())
	.pipe(gulp.dest("public/js"))
	.pipe(browserSync.reload({ stream : true })); // livereload
});

// watch
// livereload
gulp.task("watch", function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch(["*.html"], ["html"]);
	gulp.watch("src/sass/**/*.scss", ["sass"]);
	gulp.watch("src/js/*.js", ["babel"]);
});

gulp.task("default", ["watch"]);
