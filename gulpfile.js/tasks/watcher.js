const watcher = () => {
    global.gulp.watch(global.path.html.watch, global.html);
    global.gulp.watch(global.path.scss.watch, global.scss);
    global.gulp.watch(global.path.js.watch, global.script);
    global.gulp.watch(global.path.img.watch,
        global.gulp.series(
            global.img.convert,
            global.img.clear,
            global.img.copy,
            global.img.check,
        ));
    global.gulp.watch(global.path.fonts.watch,
        global.gulp.series(
            global.fonts.convert,
            global.fonts.clear,
            global.fonts.copy,
            global.fonts.check,
            global.fonts.fontFace,
        ));
    global.gulp.watch(global.path.fonts.watch, global.fonts);
}

module.exports = watcher;