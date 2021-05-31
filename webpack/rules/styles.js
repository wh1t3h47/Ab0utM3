const {arrayFilterEmpty} = require('../utils/helpers');
const {
    cssLoader,
    cssLoaderItems,
    cssModulesSupportLoaderItems,
    lessLoader,
    miniCssExtractLoader,
    postCssLoader,
    resolveUrlLoader,
    sassLoaderItems,
    typingsCssModulesLoader,
} = require('./useLoaderRuleItems');

/** css */
const cssRule = {
    test: /\.css$/,
    use: [typingsCssModulesLoader, miniCssExtractLoader, postCssLoader, resolveUrlLoader, cssLoader],
    // use: [miniCssExtractLoader, cssLoader],
};

/** less */
const lessModulesRule = {
    test: /\.module.less$/,
    use: arrayFilterEmpty([
        typingsCssModulesLoader,
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};
const lessRule = {
    test: /\.less$/,
    exclude: /\.module.less$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        lessLoader,
    ]),
};

const lessRules = [lessModulesRule, lessRule];

/** sass */
const sassModulesRule = {
    test: /\.module\.s([ca])ss$/,
    use: arrayFilterEmpty([
        typingsCssModulesLoader,
        ...cssModulesSupportLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

const sassRule = {
    test: /\.s([ca])ss$/,
    exclude: /\.module.scss$/,
    use: arrayFilterEmpty([
        ...cssLoaderItems,
        postCssLoader,
        resolveUrlLoader,
        ...sassLoaderItems,
    ]),
};

const sassRules = [sassModulesRule, sassRule];

module.exports = {
    cssRule,
    lessRules,
    sassModulesRule,
    sassRules,
};
