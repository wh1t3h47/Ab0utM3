const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!profile.json',
        '!tsconfig.tsbuildinfo',
    ],
};

const cleanWebpackPlugin = new CleanWebpackPlugin(config);
module.exports = {
    cleanWebpackPlugin,
};
