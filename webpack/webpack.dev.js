const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {devServerConfig} = require('./config');

module.exports = {
    devtool: 'cheap-module-source-map',
    plugins: [
        /** Hot reloading of devServer */
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: devServerConfig,
};
