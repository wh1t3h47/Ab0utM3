/**
 * Use to provide globals to the bundle
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
const {ProvidePlugin} = require('webpack');

const config = {};

const providePlugin = new ProvidePlugin(config);

module.exports = {
    providePlugin,
};
