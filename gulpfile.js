var gulp = require('gulp');
var sass = require('gulp-sass');

const child = require('child_process');
const gutil = require('gulp-util');

gulp.task('sass', function() {
    return gulp.src('sass/ignaciogaldames.sass')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function() {
    gulp.watch('sass/ignaciogaldames.sass', ['sass']);
    // Other watchers
})

gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['serve',
      '--watch',
      '--incremental',
      '--drafts'
    ]);
  
    const jekyllLogger = (buffer) => {
      buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log('Jekyll: ' + message));
    };
  
    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
  });

  gulp.task('default', ['watch', 'jekyll']);