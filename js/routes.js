'use strict'

import React from 'react'
import { Route, DefaultRoute } from 'react-router'
// import { injectMetalsmithRoutes } from 'metalsmith-react-router'

import Default from './components/layouts/Default'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

const routes = (
  <Route path='/' handler={Default}>
    <DefaultRoute handler={Home} />
    <Route path='projects' handler={Projects} />
    <Route path='posts' handler={Projects}>
      <Route path='2015-07-11-welcome' handler={Projects} />
    </Route>
  </Route>
)

export default routes
