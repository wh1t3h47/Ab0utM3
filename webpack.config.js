const {merge} = require('webpack-merge');

const webpackCommonConfig = require('./webpack/webpack.common');
const webpackDevelopmentConfig = require('./webpack/webpack.dev');
const webpackProductionConfig = require('./webpack/webpack.prod');
const {isProd} = require('./webpack/utils/env');

function getWebpackConfig() {
    if (isProd) {
        return merge(webpackCommonConfig, webpackProductionConfig);
    } // else
    return merge(webpackCommonConfig, webpackDevelopmentConfig);
}

module.exports = getWebpackConfig;
