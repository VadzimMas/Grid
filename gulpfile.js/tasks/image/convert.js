// const path = require('node:path');
var path = require('path');

function convert() {
    console.log("converting filles...");

    return global.gulp.src(global.path.img.specificSrc)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'IMG convert',
                message: error.message
            })),
        }))
        .pipe(global.imagemin())
        .pipe(global.sharpResponsive({
            formats: [
                {
                    width: 400,
                    format: "webp",
                    // sharp: { failOnError: false, density: 400 },
                    rename: { suffix: "-400w-1x" }
                },
                {
                    width: 800,
                    format: "webp",
                    // sharp: { failOnError: false, density: 800 },
                    rename: { suffix: "-400w-2x" }
                },
                // {
                //     width: 400,
                //     format: "avif",
                //     // sharp: { failOnError: false, density: 400 },
                //     rename: { suffix: "-400w-1x" }
                // },
                // {
                //     width: 800,
                //     format: "avif",
                //     // sharp: { failOnError: false, density: 800 },
                //     rename: { suffix: "-400w-2x" }
                // },
                // {
                //     width: 400,
                //     format: "jpeg",
                //     // sharp: { failOnError: false, density: 400 },
                //     rename: { suffix: "-400w-1x" }
                // },
                // {
                //     width: 800,
                //     format: "jpeg",
                //     // sharp: { failOnError: false, density: 800 },
                //     rename: { suffix: "-400w-2x" }
                // },


                // {
                //     width: 800,
                //     format: "webp",
                //     // sharp: { failOnError: false, density: 800 },
                //     rename: { suffix: "-800w-1x" }
                // },
                // {
                //     width: 1600,
                //     format: "webp",
                //     // sharp: { failOnError: false, density: 1600 },
                //     rename: { suffix: "-800w-2x" }
                // },
                // {
                //     width: 800,
                //     format: "avif",
                //     // sharp: { failOnError: false, density: 800 },
                //     rename: { suffix: "-800w-1x" }
                // },
                // {
                //     width: 1600,
                //     format: "avif",
                //     // sharp: { failOnError: false, density: 1600 },
                //     rename: { suffix: "-800w-2x" }
                // },
                // {
                //     width: 800,
                //     format: "jpeg",
                //     // sharp: { failOnError: false, density: 800 },
                //     rename: { suffix: "-800w-1x" }
                // },
                // {
                //     width: 1600,
                //     format: "jpeg",
                //     // sharp: { failOnError: false, density: 1600 },
                //     rename: { suffix: "-800w-2x" }
                // },

                // { width: 1300, format: "webp", rename: { suffix: "-1300w" } },
                // { width: 1300, format: "avif", rename: { suffix: "-1300w" } },
                // { width: 1300, format: "jpeg", rename: { suffix: "-1300w" } },

                // { width: 2000, format: "webp", rename: { suffix: "-2000w" } },
                // { width: 2000, format: "avif", rename: { suffix: "-2000w" } },
                // { width: 2000, format: "jpeg", rename: { suffix: "-2000w" } },

                // { width: 3000, format: "webp", rename: { suffix: "-3000w" } },
                // { width: 3000, format: "avif", rename: { suffix: "-3000w" } },
                // { width: 3000, format: "jpeg", rename: { suffix: "-3000w" } },
            ]
        }))
        .pipe(global.gulp.dest(global.path.img.destToSrc))
        .pipe(global.browserSync.stream())

}

module.exports = convert;
