var gulp       = require("gulp");
var babel      = require("gulp-babel");
var mocha      = require("gulp-mocha");
var gulpsync   = require('gulp-sync')(gulp);

var del        = require('del');

gulp.task('hello', () => console.log('Hello World!'));

gulp.task('babel', function() {
  return gulp.src('server/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('server/dist'))
});

gulp.task('test', function () {
    return gulp.src('server/test/test.js', {read:false})
        .pipe(babel())
        .pipe(mocha());
});


gulp.task('clean-server', function() {
    return del(['server/dist']);
});

gulp.task('build-test', gulpsync.sync(['clean-server', 'hello', 'babel', 'test']));
