import React, { Component, PropTypes } from 'react'
import { connect, selectCurrentPage } from 'nucleate'

const BASE_TITLE = 'Spencer'

class Base extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render () {
    const { children, title } = this.props
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{BASE_TITLE + (title ? ` | ${title}` : '')}</title>
          <meta name='viewport' content='width=device-width' />
          <meta name='description' content='Spencer Elliott: Web Developer' />

          <link rel='stylesheet' href='/main.css' />
          <script async src='/bundle.js'></script>
        </head>
        <body>
          {children}
        </body>
      </html>
    )
  }
}

function select (state) {
  return {
    title: selectCurrentPage(state).title
  }
}

export default connect(select)(Base)
