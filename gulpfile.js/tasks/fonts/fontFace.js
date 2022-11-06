// add font face to css
const fontFace = () => {
    return global.gulp.src(global.path.fonts.srcForFontface)
        .pipe(global.fontfaceGen({
            filepath: global.path.fonts.destFontFace,
            filename: "fonts.scss",
            destpath: "../fonts",
        }))
}

module.exports = fontFace;