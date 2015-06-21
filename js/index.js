'use strict'

import React from 'react'
import { Router } from 'react-router'

import routes from './routes'

if (typeof document !== 'undefined') {
  Router.run(routes, Root => {
    React.render(<Root />, document.body)
  })
}

export default function render (path, done) {
  Router.run(routes, path, Root => {
    done(/* error */ null, React.renderToString(<Root />))
  })
}
