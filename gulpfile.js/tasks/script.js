
const script = () => {
    return global.gulp.src(global.path.js.src)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'JS',
                message: error.message
            })),
        }))
        .pipe(global.fileinclude({
            prefix: '// @@',
            basepath: '@file'
        }))
        .pipe(global.gulp.dest(global.path.js.dest))
        .pipe(global.browserSync.stream())
}

module.exports = script;