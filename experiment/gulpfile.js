'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
 
var paths = {
	js: ['./app/src/**/*.js'],
	sass: ['./app/styles/**/*.scss']	
};

gulp.task('babel', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/scripts'));
});

gulp.task('babel:watch', function () {
  gulp.watch(paths.js, ['babel']);
});

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(paths.sass, ['sass']);
});