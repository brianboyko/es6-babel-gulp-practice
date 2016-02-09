var gulp = require("gulp");
var babel = require("gulp-babel");
var mocha = require("gulp-mocha");

gulp.task("default", function () {
  return gulp.src("src/index.js")
    .pipe(babel())
    .pipe(gulp.dest("public"));
});


gulp.task('hello', () => console.log('Hello World!'));

gulp.task('test', function () {
    return gulp.src('test/test.js', {read:false})
        .pipe(mocha());
});
