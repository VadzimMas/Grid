
function copy() {
    console.log("copying filles...");
    return global.gulp.src(global.path.fonts.srcForFontface)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'FONT copy',
                message: error.message
            })),
        }))
        .pipe(global.newer(global.path.fonts.destFromDest))
        .pipe(global.gulp.dest(global.path.fonts.destFromDest))
}


module.exports = copy;


