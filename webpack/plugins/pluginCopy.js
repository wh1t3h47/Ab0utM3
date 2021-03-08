const {join} = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const {rootDir} = require('../utils/env');

const config = {
    patterns: [{from: join(rootDir, './src/assets'), to: 'assets'}],
};

const copyPlugin = new CopyPlugin(config);

module.exports = {
    copyPlugin,
};
