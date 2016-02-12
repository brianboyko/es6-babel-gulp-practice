var gulp = require("gulp");
var babel = require("gulp-babel");
var mocha = require("gulp-mocha");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var rename = require('gulp-rename');
var cache = require("gulp-cache");
var minify = require("gulp-minify"); 
var gulpsync = require('gulp-sync')(gulp);
var del = require('del');

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


gulp.task('clean', function() {
    return del(['server/dist/js']);
});

// gulp.task('client', function() {
//     return null;
// });

// Default task
gulp.task('server', gulpsync.sync(['clean', 'hello', 'babel', 'test', 'watch']));

gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('server/src/**/*.js', function(event){
    gulp.start('server')
  });

  // gulp.watch('client/src/**/*.js', function(event){
  //   gulp.start('client')
  // });

});

gulp.task('default', function(){
  gulp.start('server');
});

gulp.task('build-test', gulpsync.sync(['clean', 'hello', 'babel', 'test']));
