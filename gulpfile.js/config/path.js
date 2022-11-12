
const pathSrc = ('./app/src');
const pathDest = ('./app/dest');
// const imagepath = ('/Users/vadzimmas/Desktop/Gulp-start/app/src/img');

module.exports = {
    dest: pathDest,
    html: {
        allHtmlSrc: [
            pathSrc + '/html/*.html',
            '!' + pathSrc + '/html/blocks/*.html',
            '!' + pathSrc + '/html/index.html',
        ],
        indexHtmlSrc: [
            pathSrc + '/html/index.html',
        ],
        watch: pathSrc + '/**/*.html',
        allHtmlDest: pathDest + '/html/',
        indexHtmlDest: pathDest,
    },

    scss: {
        src: pathSrc + '/scss/*.scss',
        watch: pathSrc + '/scss/**/*.scss',
        dest: pathDest + '/css',
    },

    js: {
        src: pathSrc + '/js/main.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js',
    },

    img: {
        srcFromSrc: pathSrc + '/img/**/*',
        srcFromDest: pathDest + '/img/**/*.*',
        specificSrc: [
            pathSrc + '/img/**/*.{jpg,jpeg,png,webp,avif,gif,!svg}',
            '!' + pathSrc + '/img/**/*{-1x,-2x}.*',
            '!' + pathSrc + '/img/**/ico/**/*.*',
            '!' + pathSrc + '/img/**/svg/**/*.*'
        ],
        watch: pathSrc + '/img/**/*.{jpg,jpeg,png,webp,avif,gif,svg}',
        destToDest: pathDest + '/img',
        destToSrc: pathSrc + '/img'
    },

    fonts: {
        originalFilesSrc: pathSrc + '/fonts/temp/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        srcForFontface: pathSrc + '/fonts/*.*',
        srcForCheck: pathDest + '/fonts/**/*.*',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        destFromDest: pathDest + '/fonts',
        destFromSrc: pathSrc + '/fonts',
        destFontFace: pathSrc + '/scss/blocks',
    }
}
