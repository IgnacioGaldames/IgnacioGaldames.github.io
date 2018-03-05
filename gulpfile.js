var gulp = require('gulp');
const child = require('child_process');

const source = '_source';

// Jekyll Task
gulp.task('jekyll', function() {
  const jekyll = child.spawn('jekyll', ['build', '--watch', '--incremental'])
  return gulp.src(source)
      /*
          .pipe(browserSync.reload({
              stream: true
          }))*/
});

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
console.log('hello');

  done();
}