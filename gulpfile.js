const gulp = require('gulp');
const gBabel = require('gulp-babel');
const gClean = require('gulp-clean');
const gSync = require('gulp-sync')(gulp);
const gServer = require('gulp-webserver');

gulp.task('clean-build', () => {
    return gulp
        .src('build', {
            read: false,
        })
        .pipe(gClean());
});

gulp.task('compile-js', () => {
    return gulp.src('./src/static/**/*.js')
        .pipe(gBabel({
            presets: ['env'],
        }))
        .pipe(gulp.dest('./build/static'));
});

gulp.task('copy-all', () => {
    return gulp
        .src([
            './src/**/*.html',
            './src/**/*.css',
            './src/**/images/*.*',
            // './src/**/*.js',
            '!./src/static/**/*.html', // ??
        ])
        .pipe(gulp.dest('./build'));
});

gulp.task('serve-local', () => {
    gulp.src('./')
        .pipe(gServer({
            livereload: true,
            open: true,
            fallback: './src/index.html',
        }));
});

gulp.task('build', gSync.sync(['clean-build', ['compile-js', 'copy-all']]));

// add other tasks - compile scss etc
gulp.task('dev', ['serve-local']);
