'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
var paths = {
	sass: ['./app/styles/**/*.scss']	
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(paths.sass, ['sass']);
});