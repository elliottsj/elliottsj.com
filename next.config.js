'use strict';

module.exports = {
  webpack: config => {
    const rulesExceptBabelLoaderRule = config.module.rules.slice(0, -1);
    const babelLoaderRule = config.module.rules.slice(-1)[0];
    const newConfig = Object.assign({}, config, {
      node: {
        __dirname: true,
        __filename: true,
      },
      module: Object.assign({}, config.module, {
        rules: [
          ...rulesExceptBabelLoaderRule,
          {
            test: babelLoaderRule.test,
            include: babelLoaderRule.include,
            exclude: babelLoaderRule.exclude,
            use: [
              'babel-inline-import-loader',
              {
                loader: 'babel-loader',
                options: Object.assign({}, babelLoaderRule.options, {
                  cacheDirectory: false,
                }),
              },
            ],
          },
        ],
      }),
    });
    return newConfig;
  },
};
