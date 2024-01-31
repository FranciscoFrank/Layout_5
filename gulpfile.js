const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


const paths = {
  scss: 'scss/**/*.scss',
  dest: 'css'
};

gulp.task('styles', function() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .on('error', function(err) {
      console.error('Error in autoprefixer', err);
    })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.scss, gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
