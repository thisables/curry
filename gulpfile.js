var gulp = require('gulp'),
  watch = require('gulp-watch'),
  run = require('gulp-run'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  mocha = require('gulp-mocha'),
  istanbul = require('gulp-istanbul'),
  coverageBadger = require('istanbul-cobertura-badger'),
  to5 = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(to5({
      experimental: true,
      loose: 'all'
    }))
    .pipe(sourcemaps.write())
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('src', '.');
      path.extname = '.js';
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['babel'], function() {
  return gulp.src(['*.js', 'lib/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      return gulp.src(['test.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({
          reporters: ['html', 'text', 'cobertura']
        }))
        .on('end', function() {
          coverageBadger('coverage/cobertura-coverage.xml', './', function() {
            process.exit();
          });

        });
    });
});

gulp.task('default', ['test'], function() {
  gulp.watch('**/*.es6', ['test']);
});
