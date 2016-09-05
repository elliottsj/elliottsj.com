import React, { PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import {
  assets,
  includeRoute,
  includeRoutes,
} from 'nucleate';

import BaseLayout from 'lib/layouts/BaseLayout';

import 'lib/css/main.scss';

export const getIndexRoute = includeRoute(require('route!./pages/'));

export const getChildRoutes = includeRoutes(require.context('route!./pages/', false));

const last = arr => arr.slice(-1)[0];

function Index({ children, routes }) {
  const meta = last(routes).meta || {};

  return (
    <html lang="en">
      <head>
        <title>{meta.title || 'Spencer Elliott'}</title>
        <meta name="viewport" content="width=device-width" />
        {assets()}
      </head>
      <body>
        <IntlProvider locale="en">
          <BaseLayout>
            {children}
          </BaseLayout>
        </IntlProvider>
      </body>
    </html>
  );
}

Index.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array.isRequired,
};

export const component = Index;
