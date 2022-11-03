function check() {
    console.log("checking filles...");
    return global.gulp.src(global.path.fonts.srcForCheck)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'FONT check',
                message: error.message
            })),
        }))
        .pipe(global.newer(global.path.fonts.destFromSrc))
        .pipe(global.debug())
        .pipe(global.clean())
}

module.exports = check;
