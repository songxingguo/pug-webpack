const { resolve } = require('path')
const views = require('../middleware/viewsMiddleware/src/index.js')
const path = require('../middleware/pathMiddleware/src/index.js');
const {goodCar} = require(
    './assets/data/index.json');


const html = views(__dirname + '/index.pug', {
    options: goodCar,
    extension: 'pug'
})

path(__dirname + '/../dist/goodCar/index.html', html, './dist/goodCar');

// var pug = require('pug');
// var path = require('path')
// var fs = require('fs')
// const {goodCar} = require('./assets/data/index.json');
//
//
//
// var filePath = path.resolve(__dirname,'./index.pug')
// console.log(filePath)
//
// // 编译出一个函数
// var fn = pug.compileFile(filePath);
//
// // 渲染它
// var html = fn(goodCar);
// fs.writeFileSync(path.resolve(__dirname,'./index.html'),html)
//
//
//
//
// 'use strict'
//
// const { resolve, dirname, extname, join } = require('path')
// const debug = require('debug')('koa-views')
// const consolidate = require('consolidate')
// const { stat } = require('mz/fs')
// const send = require('koa-send')
//
// module.exports = viewsMiddleware
//
// function viewsMiddleware (path, {
//     engineSource = consolidate,
//     extension = 'html',
//     options = {},
//     map
// } = {}) {
//     return function views (ctx, next) {
//         if (ctx.render) return next()
//
//         ctx.render = function (relPath, locals = {}) {
//             const suffix = (extname(relPath) || '.' + extension).slice(1)
//
//             return getPaths(path, relPath, suffix)
//                 .then((paths) => {
//                     const state = Object.assign(locals, options, ctx.state || {})
//                     debug('render `%s` with %j', paths.rel, state)
//                     ctx.type = 'text/html'
//
//                     if (isHtml(suffix) && !map) {
//                         return send(ctx, paths.rel, {
//                             root: path
//                         })
//                     } else {
//                         const engineName = map && map[suffix]
//                             ? map[suffix]
//                             : suffix
//
//                         const render = engineSource[engineName]
//
//                         if (!engineName || !render) return Promise.reject(new Error(
//                             `Engine not found for the ".${extension}" file extension`
//                         ))
//
//                         return render(resolve(paths.abs, paths.rel), state)
//                             .then((html) => {
//                                 ctx.body = html
//                             })
//                     }
//                 })
//         }
//
//         return next()
//     }
// }
//
// function getPaths(abs, rel, ext) {
//     return stat(join(abs, rel)).then((stats) => {
//         if (stats.isDirectory()) {
//             // a directory
//             return {
//                 rel: join(rel, toFile('index', ext)),
//                 abs: join(abs, dirname(rel), rel)
//             }
//         }
//
//         // a file
//         return { rel, abs }
//     })
//         .catch((e) => {
//             // not a valid file/directory
//             if (!extname(rel)) {
//                 // Template file has been provided without extension
//                 // so append to it to try another lookup
//                 return getPaths(abs, `${rel}.${ext}`, ext)
//             }
//
//             throw e
//         })
// }
//
// function isHtml (ext) {
//     return ext === 'html'
// }
//
// function toFile (fileName, ext) {
//     return `${fileName}.${ext}`
// }
