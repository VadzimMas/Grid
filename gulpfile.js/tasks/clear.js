const clear = () => {
    return global.del(global.path.dest);
}


module.exports = clear;
