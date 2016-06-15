/* File: gulpfile.js */

// choose theme

var config = {
    sassPaths: [
    ]
}

var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
   // gutil  = require('gulp-util'),
    //sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    csso = require('gulp-csso'),
	browserify = require('gulp-browserify');

// stylesheet task
gulp.task('stylesheets', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({includePaths: config.sassPaths}))   // {includePaths: config.sassPaths}
    //.pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(rename('bootsmooth.min.css'))
    .pipe(gulp.dest('./dist/'));
});


// javascript  task
gulp.task('javascript', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['./js/bootsmooth.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  // Bundle to a single file
  .pipe(concat('bootsmooth.js'))
  //.pipe(uglify())
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
