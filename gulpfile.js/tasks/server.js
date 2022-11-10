//server
const server = () => {
    global.browserSync.init({
        server: {
            baseDir: global.path.dest,
        },
        browser: 'google chrome',
        notify: false,
    })
}

module.exports = server;


