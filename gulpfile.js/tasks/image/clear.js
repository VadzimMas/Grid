function clear() {
    console.log("cleaning original filles...");

    return global.gulp.src(global.path.img.specificSrc)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'IMG clean',
                message: error.message
            })),
        }))
        .pipe(global.clean())

}

module.exports = clear;