var gulp = require('gulp');
var server = require('gulp-server-livereload');

var packageJSON  = require('./package');

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('default', []);