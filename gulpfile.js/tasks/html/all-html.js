const allHtml = () => {
    return global.gulp.src(global.path.html.allHtmlSrc)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'ALL_HTML',
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
        .pipe(global.gulp.dest(global.path.html.allHtmlDest))
        .pipe(global.browserSync.stream())
}

module.exports = allHtml;