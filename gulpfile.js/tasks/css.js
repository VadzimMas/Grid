const css = () => {
    return global.gulp.src(global.path.css.src, { sourcemaps: true })
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'CSS',
                message: error.message
            })),
        }))
        .pipe(global.cssimport())
        .pipe(global.autoprefixer())
        .pipe(global.groupCssMediaQueries())
        .pipe(global.gulp.dest(global.path.css.dest, { sourcemaps: true }))
        // .pipe(global.size({ title: "before cssmin" }))
        // .pipe(global.csso())
        // .pipe(global.size({ title: "after cssmin" }))
        // .pipe(global.rename({ suffix: '.min' }))
        // .pipe(global.gulp.dest(global.path.css.dest, { sourcemaps: true }))
        .pipe(global.browserSync.stream())
}

module.exports = css;