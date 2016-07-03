/**
 * Created by ty on 2016/7/3.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("sass", function() {
	return gulp.src("public/sass/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("public/css"));
});

gulp.task('watch', function () {
	gulp.watch("public/sass/*.scss", ["sass"]);
});