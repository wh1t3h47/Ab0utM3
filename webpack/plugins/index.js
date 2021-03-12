const pluginCleanWebpack = require('./pluginCleanWebpack');
const pluginCopy = require('./pluginCopy');
const pluginDefine = require('./pluginDefine');
const pluginEsLint = require('./pluginEsLint');
const pluginForkTsChecker = require('./pluginForkTsChecker');
const pluginHtml = require('./pluginHtml');
const pluginMiniCssExtract = require('./pluginMiniCssExtract');
const pluginProvide = require('./pluginProvide');
const pluginCompression = require('./pluginCompression');
const pluginImageMinimizer = require('./pluginImageMinimizer');
const pluginWatchIgnore = require('./pluginWatchIgnore');

module.exports = {
    ...pluginCleanWebpack,
    ...pluginCopy,
    ...pluginDefine,
    ...pluginEsLint,
    ...pluginForkTsChecker,
    ...pluginHtml,
    ...pluginMiniCssExtract,
    ...pluginProvide,
    ...pluginCompression,
    ...pluginImageMinimizer,
    ...pluginWatchIgnore,
};
