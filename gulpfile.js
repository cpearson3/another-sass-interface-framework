/* File: gulpfile.js */

// source and destination helper functions
function projectSource(p) {
  return 'src/'+p;
};

function projectDest(p) {
  return 'build/'+p;
}

// sass include paths
var normalizePaths = require('node-normalize-scss').includePaths;

var sassPaths = [].concat(normalizePaths);

// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    gutil  = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(projectSource('javascript/**/*.js'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// build detfault theme
gulp.task('default-theme', function() {
  return gulp.src(projectSource('themes/default.scss'))
    .pipe(gulp.dest(projectSource('scss/_theme.scss')));
})

gulp.task('default-theme', function() {
  return gulp.src(projectSource('themes/alt.scss'))
    .pipe(gulp.dest(projectSource('scss/_theme.scss')));
})

// sass task
gulp.task('build-css', ['default-theme'], function() {
  return gulp.src(projectSource('scss/**/*.scss'))
    .pipe(sass({
      // include normalize
      includePaths: sassPaths
    }))
    .pipe(sourcemaps.init())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('bootsmooth.min.css'))
    .pipe(gulp.dest(projectDest('stylesheets')));
});

// build javascript
gulp.task('build-js', function() {
  return gulp.src(projectSource('javascript/**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(concat('bootsmooth.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(projectDest('javascript')));
});

// move index.html
gulp.task('html', function() {
  return gulp.src(projectSource('*.html'))
    .pipe(gulp.dest(projectDest('')));
});

// build task
gulp.task('build', ['jshint', 'build-js', 'build-css', 'html']);

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['build'], function() {
  gulp.watch('src/javascript/**/*.js', ['jshint', 'build-js']);
  gulp.watch('src/scss/**/*.scss', ['build-css']);
  gulp.watch('src/*.html', ['html']);
});


