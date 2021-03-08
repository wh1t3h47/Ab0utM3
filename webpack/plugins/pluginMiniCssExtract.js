const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    // Options similar to the same options in webpackOptions.output
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
};

const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
module.exports = {
    miniCssExtractPlugin,
};
