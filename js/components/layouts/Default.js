'use strict'

import React from 'react'

export default class Default extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{this.props.title || 'Spencer Elliott'}</title>
        </head>
        <body>
          <main>{this.props.contents}</main>
          <script src='/js/bundle.js'></script>
        </body>
      </html>
    )
  }
}

Default.propTypes = {
  title: React.PropTypes.string,
  contents: React.PropTypes.node
}
