const gulp = require('gulp');
const gBabel = require('gulp-babel');
const gClean = require('gulp-clean');
const gCleanCss = require('gulp-clean-css');
const gConcat = require('gulp-concat');
const gServer = require('gulp-webserver');
const gSync = require('gulp-sync')(gulp);
const gSystemJsBuilder = require('gulp-systemjs-builder');


// Build tasks
gulp.task('clean-build', () => {
    return gulp
        .src('./build', {
            read: false,
        })
        .pipe(gClean());
});


gulp.task('copy-all', () => {
    return gulp
        .src([
            './src/**/*.html',
            './src/**/images/*.*',
            // './src/**/*.js',
            './src/**/*.css',
            '!./src/static/**/*.js',
        ])
        .pipe(gulp.dest('./build'));
});


gulp.task('compile-js', () => {
    return gulp.src('./src/**/*.js')
        .pipe(gBabel({
            presets: ['env'],
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('compile-js-bundle', () => {
    const builder = gSystemJsBuilder('./', './src/config/system-config.js');
    builder.buildStatic('./src/static/app.js', 'bundle.js', {
            minify: true,
            mangle: false,
        })
        .pipe(gulp.dest('./build'));
});


gulp.task('clean-css', () => {
    gulp.src('./src/**/*.css')
        .pipe(gCleanCss({ compatibility: 'ie8' }))
        .pipe(gConcat('main.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('build-D', gSync.sync(['clean-build', ['compile-js', 'copy-all']]));

gulp.task('build-S', ['compile-js-bundle', 'clean-css'], () => {
    gulp.src(['./src/static/images/**/*', './src/static/views/**/*'], { base: '.' })
        .pipe(gulp.dest('./build'));
});

// Dev tasks
gulp.task('serve-local', () => {
    gulp.src('./')
        .pipe(gServer({
            livereload: true,
            open: true,
            fallback: './src/index.html',
        }));
});

gulp.task('dev', ['serve-local']);
