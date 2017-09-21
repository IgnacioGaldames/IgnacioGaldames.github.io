var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

const child = require('child_process');

gulp.task('hello', function() {
    console.log('Hello Ignacio');
});

gulp.task('sass', function() {
    return gulp.src('sass/ignaciogaldames.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('jekyll', function() {
    const jekyll = child.spawn('jekyll', ['build','--watch', '--incremental'])
    return gulp.src('_site')
        .pipe(browserSync.reload({
            stream: true
        }))
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
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass','jekyll']);
    // Other watchers
    gulp.watch(['_source/**/*.html'], ['sass','jekyll']);
    gulp.watch(['_source/**/*.js'], ['sass','jekyll']);
});

gulp.task('default', ['watch'], function() {

})