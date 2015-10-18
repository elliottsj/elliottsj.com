import React from 'react'
import Typography from 'typography'
import DocumentTitle from 'react-document-title'

const { TypographyStyle } = new Typography()

export default class Html extends React.Component {
  static defaultProps = {
    body: ''
  }

  render () {
    const title = DocumentTitle.rewind()
    const { body, favicon } = this.props

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <title>{title}</title>
          <link rel='shortcut icon' href={favicon}/>
          <TypographyStyle/>
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: body}} />
          <script src='/bundle.js'/>
        </body>
      </html>
    )
  }
}
