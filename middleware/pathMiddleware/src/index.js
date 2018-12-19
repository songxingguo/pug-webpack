const { resolve } = require('path')
const {mkdir, writeFileSync} = require('fs');

module.exports = pathMiddleware

function pathMiddleware(file, data, module, dir='./dist') {
    mkdir(dir, function () {
        mkdir(module, function () {
            writeFileSync(resolve(__dirname, file), data)
        });
    });
}
