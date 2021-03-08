const {join} = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');

const {rootDir} = require('../utils/env');

const config = {
    context: join(rootDir, './src'),
    extensions: ['js', 'jsx', 'ts', 'tsx'],
};

const esLintPlugin = new ESLintPlugin(config);

module.exports = {
    esLintPlugin,
};
