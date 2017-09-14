var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

const child = require('child_process');

gulp.task('hello', function() {
    console.log('Hello Ignacio');
});

gulp.task('sass', function() {
    return gulp.src('sass/ignaciogaldames.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('_site/css'))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('jekyll', function() {
    const jekyll = child.spawn('jekyll', ['build','--watch', '--incremental']);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '_site',
            port: 4000
        },
    })
});

gulp.task('watch', ['sass', 'jekyll', 'browserSync'], function() {
    gulp.watch(['sass/*.sass', 'sass/*.scss'], ['sass','jekyll']);
    // Other watchers
    gulp.watch('_site/*', browserSync.reload);
});

gulp.task('default', ['watch'], function() {

})