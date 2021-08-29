
const config = require('./webpack.config');

const { merge } = require('webpack-merge');

const path = require('path');

module.exports = Object.assign(config, {
    mode: 'development',
    output: {
        path: path.join(__dirname, './docs/gourd'),
        filename:'gourd.js'
    }
});