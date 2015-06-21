'use strict'

/* Local imports */
import routes from './js/routes'

/* Node imports */
import path from 'path'

/* Metalsmith imports */
import Metalsmith from 'metalsmith'
import watch from 'metalsmith-watch'
import serve from 'metalsmith-serve'
import drafts from 'metalsmith-drafts'
import markdown from 'metalsmith-markdown'
import permalinks from 'metalsmith-permalinks'
import webpack from 'metalsmith-plugin-webpack'
import { renderReactRoutes } from 'metalsmith-react-router'

Metalsmith(__dirname)
  .source('source')
  .use(watch({
    paths: {
      'source/**': true
    }
  }))
  .use(serve({port: 8000}))
  .use(drafts())
  .use(markdown())
  .use(permalinks(':title'))
  .use(webpack(files => ({
    entry: './js/index.js',
    output: {
      path: path.resolve(__dirname, './build/'),
      filename: 'bundle.js',
      pathinfo: true
    },
    module: {
      preLoaders: [
        { test: /\.js?$/, include: path.resolve(__dirname, 'js'), loader: 'eslint-loader' }
      ],
      loaders: [
        { test: /\.js?$/, include: path.resolve(__dirname, 'js'), loader: 'babel-loader' }
      ]
    }
  })))
  .use(renderReactRoutes({  // Render all react-router routes to `files`
    routes
  }))
  .build(err => {
    if (err) { throw err }
  })
