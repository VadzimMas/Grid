
function copy() {
    console.log("copying filles...");
    return global.gulp.src(global.path.img.srcFromSrc)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'IMG copy',
                message: error.message
            })),
        }))
        .pipe(global.newer(global.path.img.destToDest))
        .pipe(global.gulp.dest(global.path.img.destToDest))
}


module.exports = copy;


