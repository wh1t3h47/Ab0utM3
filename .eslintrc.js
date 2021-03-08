const path = require('path');
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    env: {
        browser: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        /** Solves conflicts between eslint and prettier */
        'prettier/@typescript-eslint',
        /** Solves conflicts between react rules and prettier */
        'prettier/react',
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: 'module', // For imports
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        /** TypeScript usage cover those rules */
        'react/no-direct-mutation-state': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/require-render-return': 'off',

        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
