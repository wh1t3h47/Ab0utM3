const webpack = require('webpack');

/**
 * @fileoverview Implements watchIgnorePlugin accordingly to
 * typing-for-css-modules loader documentation: `As the loader
 * generates typing files, it is wise to tell webpack to ignore
 * them. The fix is luckily very simple. Webpack ships with a
 * "WatchIgnorePlugin" out of the box. Simply add this to your
 * webpack plugins`
 */
const {WatchIgnorePlugin} = require('webpack');

const typescriptStylesheetDeclarations = {
    paths: [/css\.d\.ts$/, /less\.d\.ts$/, /sass\.d\.ts$/],
};
const watchIgnorePlugin = new WatchIgnorePlugin(
    typescriptStylesheetDeclarations,
);

module.exports = {
    watchIgnorePlugin,
};
