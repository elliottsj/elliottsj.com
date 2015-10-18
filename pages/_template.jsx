import React from 'react'
import { RouteHandler, Link, State } from 'react-router'
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import Typography from 'typography'

const typography = new Typography()
const { rhythm, fontSizeToMS } = typography

export default React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0
          }}
        >
          <RouteHandler typography={typography} {...this.props} />
        </Container>
      </div>
    )
  }
})
