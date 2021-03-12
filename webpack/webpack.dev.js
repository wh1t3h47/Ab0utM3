const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {devServerConfig} = require('./config');
const plugins = require('./plugins');

module.exports = {
    devtool: 'cheap-module-source-map',
    plugins: [
        /** Hot reloading of devServer */
        new ReactRefreshWebpackPlugin(),
        plugins.watchIgnorePlugin,
    ],
    devServer: devServerConfig,
};
