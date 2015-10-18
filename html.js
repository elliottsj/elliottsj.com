import React from 'react'
import Typography from 'typography'
import DocumentTitle from 'react-document-title'

const { TypographyStyle } = new Typography()

export default class Html extends React.Component {
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
          <TypographyStyle/>
          <style dangerouslySetInnerHTML={{__html:
            `
              body {
                color: rgb(66,66,66);
              }
              h1,h2,h3,h4,h5,h6 {
                color: rgb(44,44,44);
              }
              a {
                color: rgb(42,93,173);
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            `
          }}/>
        </head>
        <body className='landing-page'>
          <div id='react-mount' dangerouslySetInnerHTML={{__html: body}} />
          <script src={`${urlPrefix}/bundle.js`}/>
        </body>
      </html>
    );
  }
}
