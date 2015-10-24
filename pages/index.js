import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class extends React.Component {
  render () {
    return (
      <DocumentTitle title={this.props.config.blogTitle}>
        <div>
          <p>
            Lorem ipsum
          </p>
          <ul>
            {
              _(this.props.pages)
                .filter(page => !page.data.draft)
                .sortBy(page => page.data.date)
                .reverse()
                .map(page => {
                  const title = page.data.title || page.path
                  return (
                    <li key={page.path}>
                      <Link to={page.path}>{title}</Link>
                    </li>
                  )
                })
                .value()
            }
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
