const scss = () => {
    return global.gulp.src(global.path.scss.src)
        .pipe(global.plumber({
            errorHandler: global.notify.onError(error => ({
                title: 'SCSS',
                message: error.message
            })),
        }))
        .pipe(global.sass(
            // { outputStyle: 'compressed' }
        ).on('error', global.sass.logError))
        .pipe(global.groupCssMediaQueries())
        // .pipe(global.autoprefixer())
        .pipe(global.gulp.dest(global.path.scss.dest))
        .pipe(global.browserSync.stream())
}

module.exports = scss;




// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };