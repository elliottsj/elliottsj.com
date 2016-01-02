import 'babel-polyfill'

import React from 'react'
import { IntlProvider } from 'react-intl'
import { createRenderer } from 'nucleate'

import 'file?name=CNAME!./CNAME'
import './css/main.scss'

const render = createRenderer({
  renderSite: site => (
    <IntlProvider locale='en'>
      {site}
    </IntlProvider>
  )
})
export default render
