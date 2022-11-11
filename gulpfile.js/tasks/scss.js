const scss = () => {
    return global.gulp.src(global.path.scss.src)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            })),
        }))
        .pipe(global.sass(
            // { outputStyle: 'compressed' }
        ).on('error', global.sass.logError))
        .pipe(global.groupCssMediaQueries())
        .pipe(global.autoprefixer())
        .pipe(global.gulp.dest(global.path.scss.dest))
        .pipe(global.browserSync.stream())
}

module.exports = scss;