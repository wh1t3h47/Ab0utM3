const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const imageMinimizerPlugin = new ImageMinimizerPlugin({
    minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
            [
                'gifsicle',
                {
                    interlaced: true,
                    quality: 95,
                },
            ],
            [
                'jpegtran',
                {
                    progressive: true,
                    quality: 95,
                },
            ],
            [
                'optipng',
                {
                    optimizationLevel: 5,
                    quality: 95,
                },
            ],
            [
                'svgo',
                {
                    plugins: [
                        {
                            removeViewBox: false,
                            quality: 95,
                        },
                    ],
                },
            ],
        ],
    },
});

module.exports = {
    imageMinimizerPlugin,
};
