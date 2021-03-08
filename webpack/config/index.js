const alias = require('./alias');
const devServer = require('./devServer');
const sassResources = require('./sassResources');

module.exports = {
    ...alias,
    ...devServer,
    ...sassResources,
};
