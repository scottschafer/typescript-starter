const gulp = require('gulp');
const tslint = require('gulp-tslint');

const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const tsConf = require('../tsconfig.json').compilerOptions;
const conf = require('../conf/gulp.conf');

gulp.task('ts_scripts', ts_scripts);
gulp.task('js_scripts', js_scripts);

gulp.task('scripts', gulp.series('ts_scripts', 'js_scripts'));


function ts_scripts() {
  return gulp.src(conf.path.src('**/*.ts'))
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report({emitError: false}))
    .pipe(sourcemaps.init())
    .pipe(typescript(tsConf))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest(conf.path.tmp()));
}


function js_scripts() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(gulp.dest(conf.path.tmp()));
}
