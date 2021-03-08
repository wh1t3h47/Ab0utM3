const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');

const compressionPlugin = new CompressionPlugin({
    filename: '[path][base].br',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg|woff)$/,
    compressionOptions: {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
    },
    threshold: 5120,
    minRatio: 0.3,
    deleteOriginalAssets: true,
});

module.exports = {
    compressionPlugin,
};
