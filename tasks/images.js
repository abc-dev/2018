'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let browserSync = require('browser-sync');

gulp.task('images', minifyImages);

function minifyImages() {
  return gulp
    .src(`{${config.assets}}/**/*`, { cwd: config.sourceDir })
    .pipe(imagemin())
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.reload({ stream: true }));
}
