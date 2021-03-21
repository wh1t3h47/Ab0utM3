//const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
//
///** @fileoverview provide critical CSS inline for SEO purposes */
//
//const config = {
//    replace: {
//        filter: (fileName) => {
//            console.log('-----------------------------------------------');
//            console.log(fileName);
//            const matchCriticalCss = /critical.css$/;
//            return matchCriticalCss.test(fileName);
//        },
//        styleTagFactory: ({style}) => {
//            return `<style type="text/css">${style}</style>`;
//        },
//        leaveCSSFile: true,
//        /** Removes <!-- inline_css_plugin--> comment on index.html */
//        removeTarget: true,
//        target: '<!-- inline_css_plugin -->',
//    },
//};
//
//const htmlInlineCssWebpackPlugin = new HTMLInlineCSSWebpackPlugin(config);
//
//module.exports = {
//    htmlInlineCssWebpackPlugin,
//};
