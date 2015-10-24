import React from 'react'
import { RouteHandler, Link } from 'react-router'
import Header from '../components/Header'

import 'normalize.css'
import '../css/styles.css'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Header>
          {this.props.config.blogTitle}
        </Header>
        <div>
          <RouteHandler {...this.props} />
        </div>
      </div>
    )
  }
}
