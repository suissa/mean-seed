// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');

var jsFiles = [
    'front/js/app.js',
    'front/js/filters.js',
    'front/js/services.js',
    'front/js/controllers.js',
    'front/js/directives.js',
    'front/js/modules/**/*.js'    
];

gulp.task('clean', function() {
    return gulp.src(['front/js/all.js'], {read: false})
        .pipe(clean({force: true}));
});

gulp.task('lint', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify', ['lint'], function() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('front/js'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['minify']);
});

// Default Task
gulp.task('default', ['minify']);
