var gulp = require('gulp');

var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('www-css', function() {
  return gulp.src('less/styles.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename("www.css"))
    .pipe(gulp.dest('static/static/'));
});

gulp.task('www-scripts', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.js',
		   'node_modules/bootstrap/dist/js/bootstrap.js',
		   'node_modules/jquery.easing/jquery.easing.js'])
    .pipe(concat('www.min.js'))
    .pipe(uglify())
    .pipe(rename("www.min.js"))
    .pipe(gulp.dest('static/static/'));
});

gulp.task('watch', function() {
  gulp.watch(["less/www/**/*.less"], ['www-css']);
});

gulp.task('default', ['www-css', 'www-scripts']);
