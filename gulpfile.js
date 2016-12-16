var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {

    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));

});

gulp.task('js', function() {

    return gulp.src(['./js/app.js', './js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js'));

});

gulp.task('watch', function() {

    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch('./sass/**/*.scss', ['sass']);

});

gulp.task('templates', function() {

   return gulp.src('./templates/*.html')
       .pipe(gulp.dest('./build/templates'));

});

gulp.task('index', function() {

    return gulp.src('./index.html')
        .pipe(gulp.dest('./build'));

});

gulp.task('images', function() {

    return gulp.src('./assets/images/*.*')
        .pipe(gulp.dest('./build/images'));

});

gulp.task('prod', ['sass', 'js', 'templates', 'index', 'images']);

gulp.task('default', ['js', 'sass', 'watch']);