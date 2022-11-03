const html = () => {
    return global.gulp.src(global.path.html.src)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'HTML',
                message: error.message
            })),
        }))
        .pipe(global.fileinclude(
            {
                prefix: '<!-- @@',
                basepath: '@file',
                suffix: '-->',
            }
        ))
        // .pipe(global.size({ title: "before htmlmin" }))
        // .pipe(global.htmlmin({
        //     collapseWhitespace: true,
        // }))
        // .pipe(global.size({ title: "after htmlmin" }))
        // .pipe(global.webphtml())
        .pipe(global.gulp.dest(global.path.html.dest))
        .pipe(global.browserSync.stream())
}

module.exports = html;