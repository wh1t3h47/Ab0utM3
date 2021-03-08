/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
const isWindows = require('is-windows');

const {devServerProxyConfig} = require('./devServierProxy');

const defaultPort = 8080;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
};

module.exports = {
    devServerUrl,
    devServerConfig,
};
