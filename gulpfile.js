var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('hello', function() {
    console.log('Hello Ignacio');
});

gulp.task('sass', function() {
    return gulp.src('sass/ignaciogaldames.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('css'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('sass/ignaciogaldames.sass', ['sass']);
    // Other watchers
})

gulp.task('default', ['watch'], function() {

})