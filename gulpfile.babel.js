var gulp = require("gulp");
var babel = require("gulp-babel");
var mocha = require("gulp-mocha");
var concat = require("gulp-concat");
var notify = require("gulp-notify");
var rename = require('gulp-rename');
var cache = require("gulp-cache");
var uglify = require("gulp-uglify"); 
var gulpsync = require('gulp-sync')(gulp);
var del = require('del');

gulp.task('hello', () => console.log('Hello World!'));

gulp.task("build:server:scripts", function () {
  return gulp.src("server/src/js/**/*.js")
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(gulp.dest("server/dist/js"))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest("server/dist/js"))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('test', function () {
  gulp.start('clean');
  gulp.start('build:server:scripts');
    return gulp.src('server/test/test.js', {read:false})
        .pipe(mocha());
});


gulp.task('clean', function() {
    return del(['server/dist/js']);
});

// gulp.task('client', function() {
//     return null;
// });

// Default task
gulp.task('server', gulpsync.sync(['clean', 'hello', 'build:server:scripts', 'test', 'watch']));

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

gulp.task('build-test', gulpsync.sync(['clean', 'hello', 'build:server:scripts', 'test']));
