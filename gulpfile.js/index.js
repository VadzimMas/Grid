// all plagins and packages conected to global object for clean code
const glob = require('./config/global.js');

// individual run
exports.clear = global.clear;
exports.css = global.css;
exports.scss = global.scss;
exports.script = global.script;
exports.check = global.check;
exports.watcher = global.watcher;
exports.server = global.server;
exports.html = global.gulp.series(
    global.html.allHtml,
    global.html.indexHtml,
);
exports.image = global.gulp.series(
    global.img.convert,
    global.img.clear,
    global.img.copy,
    global.img.check,
)
exports.fonts = global.gulp.series(
    global.fonts.convert,
    global.fonts.clear,
    global.fonts.copy,
    global.fonts.check,
    global.fonts.fontFace,
)


// build
exports.dev = global.gulp.series(
    global.clear,
    this.html,
    global.scss,
    global.script,
    this.image,
    this.fonts,
    global.gulp.parallel(
        global.watcher,
        global.server
    )
)



