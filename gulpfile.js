/* File: gulpfile.js */

// add extra Sass include paths here
var config = {
    sassPaths: [
    ]
}

var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso'),
	babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream");

// stylesheet task
gulp.task('stylesheets', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({includePaths: config.sassPaths}))
    .pipe(csso())
    .pipe(rename('asif.min.css'))
    .pipe(gulp.dest('./dist/'));
});

// javascript task
gulp.task('javascript', function() {
   return browserify({
        entries: ["./js/main.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("asif.build.js"))
    .pipe(gulp.dest("./dist"))
  ;
});

// build task
gulp.task('build', ['stylesheets', 'javascript']);

// Watch tasks
gulp.task('watch', ['build'], function() {
    // Sass
    gulp.watch(['./scss/**/*.scss'], [
        'stylesheets'
    ]);
    
    // Javascript
    gulp.watch(['./js/**/*.js'], [
      'javascript'      
    ]);
});

// define task
gulp.task('default', ['watch']);
