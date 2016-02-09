import React, { Component, PropTypes } from 'react';
import { FormattedDate } from 'react-intl';
import { Link, Meta } from 'sitegen';

export const route = require('sitegen/internal').wrapPageContext(require.context('page!./posts'));

export class component extends Component {
  constructor(...args) {
    super(...args);
    this.state = { meta: null };
  }

  componentWillMount() {
    const { routes } = this.props;

    const currentRoute = routes[routes.length - 1];
    currentRoute.getMeta((err, m) => this.setState({ meta: m }));
  }

  render() {
    const { children } = this.props;
    const { meta } = this.state;

    if (!meta) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <header className="post-header">
          <h1>{meta.title}</h1>
          <p className="meta">
            <FormattedDate
              value={meta.date}
              day="numeric"
              month="long"
              year="numeric"
            />
          </p>
        </header>
        <article className="post-content">
          {children}
        </article>
      </div>
    );
  }
}

component.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array,
};
