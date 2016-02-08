import gulp from 'gulp';
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('hello', () => console.log('Hello World!'));

gulp.task('default', function () {
    return gulp.src('src/index.js')
        .pipe(babel())
        .pipe(gulp.dest('public'));
});

gulp.task('test', function () {
    return gulp.src('test/test.js', {read:false})
        .pipe(mocha());
});

// gulp.task('test', function () {
//   return gulp.src('test.js', {read: false})
//     // gulp-mocha needs filepaths so you can't have any plugins before it 
//     .pipe(mocha({reporter: 'nyan'}));
// });