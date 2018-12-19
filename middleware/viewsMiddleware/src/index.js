const { resolve, dirname, extname, join } = require('path')
const pug = require('pug');

module.exports = viewsMiddleware

function viewsMiddleware(path, { options, extension = 'html'} = {}) {
    const compileFile = pug.compileFile;
    return compileFile(path)(options);
}

