const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// PluginInlineSource extends htmlWebpackPlugin
// const {extendHtmlPluginConfig} = require('./pluginInlineSource');

const {rootDir} = require('../utils/env');

const config = {
    filename: 'index.html',
    inject: true,
    template: join(rootDir, './src/index.html'),
    // ...extendHtmlPluginConfig,
};

const htmlWebpackPlugin = new HtmlWebpackPlugin(config);

module.exports = {
    htmlWebpackPlugin,
};
