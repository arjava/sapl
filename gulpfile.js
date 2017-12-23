var gulp = 			require("gulp"),
	sass = 			require("gulp-sass"),
	uglify = 		require("gulp-uglify"),
	babel = 		require("gulp-babel"),
	autoprefixer = 	require("gulp-autoprefixer"),
	browserSync = 	require("browser-sync").create();

// html
gulp.task("html", function() {
	return gulp.src("*.html")
		.pipe(browserSync.stream());
});

// compile sass
// automatic browser prefixing
gulp.task("sass", function() {
	return gulp.src("src/sass/**/*.scss")
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(autoprefixer({
			browsers : "last 20 versions"
		}))
		.pipe(gulp.dest("public/css"))
		.pipe(browserSync.stream());
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
		.pipe(browserSync.stream());
});

// watch
// livereload
gulp.task("watch", function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("*.html", ["html"]);
	gulp.watch("src/sass/**/*.scss", ["sass"]);
	gulp.watch("src/js/*.js", ["babel"]);
});

gulp.task("default", ["watch"]);
