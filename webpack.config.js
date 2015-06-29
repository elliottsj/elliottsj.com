import path from 'path'
import makeWebpackConfig from 'nucleate/lib/makeWebpackConfig'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const config = makeWebpackConfig({ srcDir: path.resolve(__dirname, 'src') })

export default {
  ...config,
  entry: './src/index.js',
  module: {
    ...config.module,
    loaders: [
      ...config.module.loaders,
      // Extract sass files (with sourcemaps)
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap' +
          '!sass-loader?sourceMap'
        )
      }
    ]
  },
  devtool: undefined,
  plugins: [
    ...config.plugins,
    // Extract css to [name].css
    new ExtractTextPlugin('[name].css')
  ],
  'markdown-it': {
    preset: 'default'
  }
}
