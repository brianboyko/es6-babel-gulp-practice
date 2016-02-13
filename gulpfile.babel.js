var gulp       = require("gulp");
var gutil      = require("gulp-util"); 
var babel      = require("gulp-babel");
var mocha      = require("gulp-mocha");
var concat     = require("gulp-concat");
var notify     = require("gulp-notify");
var rename     = require('gulp-rename');
var cache      = require("gulp-cache");
var minify     = require("gulp-minify"); 
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); 
var gulpsync   = require('gulp-sync')(gulp);

var del        = require('del');

gulp.task('hello', () => console.log('Hello World!'));

gulp.task('babel', function() {
  return gulp.src('server/src/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('server/dist/js'))
});

gulp.task('test', function () {
    return gulp.src('server/test/test.js', {read:false})
        .pipe(babel())
        .pipe(mocha());
});


gulp.task('clean-server', function() {
    return del(['server/dist/js']);
});

gulp.task('build-test', gulpsync.sync(['clean-server', 'hello', 'babel', 'test']));
