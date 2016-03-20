/* File: gulpfile.js */

// choose theme

var config = {
    sassPaths: [
      'bower_components/normalize-scss/'
    ]
}

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    gutil  = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    minifyCss = require('gulp-minify-css');

// sass task
gulp.task('stylesheets', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({includePaths: config.sassPaths}))   // {includePaths: config.sassPaths}
    .pipe(sourcemaps.init())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('bootsmooth.min.css'))
    .pipe(gulp.dest('./dist/'));
});

// build task
gulp.task('build', ['stylesheets']);

// Watch tasks
gulp.task('watch', ['build'], function() {
    // Sass
    gulp.watch(['./scss/*.scss'], [
        'stylesheets'
    ]);
});

// define the default task and add the watch task to it
gulp.task('default', ['watch']);
