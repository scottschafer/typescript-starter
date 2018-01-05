const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src('app/**/*.html'))
    .pipe(htmlmin(conf.htmlmin))
    .pipe(gulp.dest(conf.path.tmp()));
}
