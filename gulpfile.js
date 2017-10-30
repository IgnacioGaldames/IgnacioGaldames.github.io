var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

const child = require('child_process');

gulp.task('hello', function() {
    console.log('Hello Ignacio');
});

gulp.task('useref', function(){
    return gulp.src('_site/*.html')
      .pipe(useref())
      // Minifies only if it's a JavaScript file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('_site'))
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
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['watch'], function() {

})