const convert = () => {
    return global.gulp.src(global.path.fonts.originalFilesSrc)
        // throws message if something wrong
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'FONT convert',
                message: error.message
            })),
        }))
        // converts to ttf woff eot svg
        .pipe(global.fonter({
            formats: ['ttf', 'woff', 'eot', 'svg']
        }))
        .pipe(global.gulp.dest(global.path.fonts.destFromSrc))
        // converts ttf to woff2
        .pipe(global.ttf2woff2())
        .pipe(global.gulp.dest(global.path.fonts.destFromSrc))

        // updates browser
        .pipe(global.browserSync.stream())
}

module.exports = convert;