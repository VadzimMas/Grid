//server
const server = () => {
    global.browserSync.init({
        server: {
            baseDir: global.path.dest
        }
    })
}

module.exports = server;


