// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base + '../css';
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
})