function check() {
    console.log("checking filles...");
    return global.gulp.src(global.path.img.srcFromDest)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'IMG check',
                message: error.message
            })),
        }))
        .pipe(global.newer(global.path.img.destToSrc))
        .pipe(global.debug())
        .pipe(global.clean())
}
module.exports = check;
