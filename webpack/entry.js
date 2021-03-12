const {join} = require('path');

const {rootDir} = require('./utils/env');

module.exports = {
    index: {
        import: join(rootDir, '/src/index.tsx'),
        dependOn: 'shared',
    },
    cleanConsoleOnHMR: {
        import: join(__dirname, './utils/cleanConsoleOnHMR.js'),
        dependOn: 'shared',
    },
    shared: {
        import: 'react',
    },
};
