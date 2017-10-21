const gulp = require('gulp');
const gBabel = require('gulp-babel');
const gClean = require('gulp-clean');
const gSync = require('gulp-sync')(gulp);


gulp.task("clean-build", () => {
    return gulp
        .src("build", {
            read: false,
        })
        .pipe(gClean());
});

gulp.task("compile-js", () => {
    return gulp.src("./src/static/**/*.js")
        .pipe(gBabel({
            presets: ["env"],
        }))
        .pipe(gulp.dest("./build/static"));
});

gulp.task("copy-all", () => {
    return gulp
        .src([
            "./src/**/*.html",
            "./src/**/*.css",
            "./src/**/*.js",
            "!./src/static/**/*.html",
        ])
        .pipe(gulp.dest("./build"))
});

gulp.task("build", gSync.sync(["clean-build", ["compile-js", "copy-all"]]));
