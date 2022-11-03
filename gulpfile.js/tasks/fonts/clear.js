function clear() {
    console.log("cleaning original filles...");

    return global.gulp.src(global.path.fonts.originalFilesSrc)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'FONT clear',
                message: error.message
            })),
        }))
        .pipe(global.clean())

}

module.exports = clear;