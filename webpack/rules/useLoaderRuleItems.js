const {join} = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassResourceItems = require('../config');
const {isProd, rootDir, webpackDir} = require('../utils/env');

const cssLoader = {
    loader: 'css-loader',
};

/**
 * Sass loader with sass-resources-loader
 */
const sassLoaderItems = [
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
            // Prefer `dart-sassRules`
            implementation: require('sass'),
        },
    },
    sassResourceItems.length
        ? {
              loader: 'sass-resources-loader',
              options: {
                  resources: sassResourceItems,
              },
          }
        : null,
];

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            config: join(webpackDir, './config/postcss.js'),
        },
        sourceMap: true,
    },
};

/***
 * Using MiniCssExtractPlugin in production or style-loader in development
 * @see https://webpack.js.org/plugins/mini-css-extract-plugin/#root
 * @see https://webpack.js.org/loaders/style-loader/#root
 */
const miniCssExtractLoader = isProd
    ? {
          loader: MiniCssExtractPlugin.loader,
          options: {
              esModule: false,
          },
      }
    : {
          loader: 'style-loader',
          options: {
              esModule: false,
          },
      };

/**
 * @see https://webpack.js.org/loaders/less-loader/#root
 */
const lessLoader = {
    loader: 'less-loader',
    options: {
        sourceMap: true,
        lessOptions: {
            javascriptEnabled: true,
        },
    },
};

/**
 * Provides types to CSS modules from css-loader
 * @see https://github.com/TeamSupercell/typings-for-css-modules-loader
 */
const typingsCssModulesLoader = {
    loader: '@teamsupercell/typings-for-css-modules-loader',
    options: {
        banner:
            '// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
        formatter: 'prettier',
    },
};

/**
 * @see https://webpack.js.org/loaders/sass-loader/#problems-with-url
 */
const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true,
    },
};

const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: join(rootDir, '/.babelrc.js'),
    },
};

const cssModulesSupportLoaderItems = [
    miniCssExtractLoader,
    typingsCssModulesLoader,
    {
        ...cssLoader,
        options: {
            esModule: false,
            modules: {
                exportLocalsConvention: 'camelCaseOnly',
                localIdentName: '[local]__[contenthash:base64:5]',
            },
        },
    },
];

const cssLoaderItems = [miniCssExtractLoader, cssLoader];

module.exports = {
    cssLoader,
    sassLoaderItems,
    postCssLoader,
    miniCssExtractLoader,
    lessLoader,
    typingsCssModulesLoader,
    resolveUrlLoader,
    babelLoader,
    cssModulesSupportLoaderItems,
    cssLoaderItems,
};
