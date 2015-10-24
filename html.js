/* global __GH_PAGES__ */
import React from 'react'
import DocumentTitle from 'react-document-title'

export default class Html extends React.Component {
  static propTypes = {
    body: React.PropTypes.string,
    config: React.PropTypes.object
  }

  static defaultProps = {
    body: ''
  }

  render () {
    const { body, config } = this.props
    const title = DocumentTitle.rewind()
    const urlPrefix =
      typeof __GH_PAGES__ !== 'undefined' && __GH_PAGES__
        ? config.ghPagesURLPrefix
        : ''

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <title>{title}</title>
          <link href='https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700' rel='stylesheet' type='text/css' />
          <script defer src={`${urlPrefix}/bundle.js`}/>
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: body}} />
        </body>
      </html>
    )
  }
}
