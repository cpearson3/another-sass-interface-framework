/* File: gulpfile.js */

// choose theme

var config = {
    sassPaths: []
}

// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    gutil  = require('gulp-util'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    minifyCss = require('gulp-minify-css');

// configure the jshint task
gulp.task('lint', function() {
  return gulp.src('./src/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Browserify task
gulp.task('browserify', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['src/javascript/bootsmooth.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  // Bundle to a single file
  .pipe(concat('bootsmooth.js'))
  //.pipe(uglify())
  // Output it to our build folder
  .pipe(gulp.dest('build/javascript'));
});

// sass task
gulp.task('stylesheets', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())   // {includePaths: config.sassPaths}
    .pipe(sourcemaps.init())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('bootsmooth.min.css'))
    .pipe(gulp.dest('./build/stylesheets'));
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('./src/*.html')
  // And put it in the build folder
  .pipe(gulp.dest('build/'));
});

// build task
gulp.task('build', ['lint', 'browserify', 'stylesheets', 'views']);

// Watch tasks
gulp.task('watch', ['lint', 'build'], function() {
    // Watch our scripts
    gulp.watch(['./src/javascript/*.js', './src/javascript/**/*.js'],[
        'lint',
        'browserify'
    ]);
    
    // Views
    gulp.watch(['./src/*.html'], [
        'views'
    ]);
    
    // Sass
    gulp.watch(['./src/scss/*.scss'], [
        'stylesheets'
    ]);
});

// define the default task and add the watch task to it
gulp.task('default', ['watch']);