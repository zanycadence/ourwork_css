var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

var paths = {
    source: './*.scss',
};

gulp.task('build', function () {
    gulp.src(paths.source)
        .pipe(sass({
                outputStyle: 'compact',
                precision: 10
            })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('../ourwork_wagtail/ourwork_wagtail/static/css'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('../ourwork_wagtail/ourwork_wagtail/static/css'));
});

gulp.task('default', ['build']);