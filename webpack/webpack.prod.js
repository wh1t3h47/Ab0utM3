const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const plugins = require('./plugins');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
    },
    plugins: [
        plugins.cleanWebpackPlugin,
        plugins.miniCssExtractPlugin,
        plugins.compressionPlugin,
    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
