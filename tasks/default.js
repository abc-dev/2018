'use strict';

let gulp = require('gulp');
let gulpSequence = require('gulp-sequence');

gulp.task('default', ['clean'], gulpSequence('watch'));
