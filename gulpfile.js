const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', () => {
   gulp.src('./src')
      .pipe(webserver({
         livereload: true,
         // directoryListing: true,
         open: true
      }));
});

gulp.task('default', ['webserver']);
