---
layout: lib/layouts/PostLayout
title: A Comparison of React-Based Static Site Generators
date: 2015-12-29 12:00:00
---

### Why?
[The benefits of using React for client-side applications are clear](https://facebook.github.io/react/blog/2013/06/05/why-react.html); and especially with the introduction of features like [server-side-rendering](https://facebook.github.io/react/docs/top-level-api.html#reactdomserver) and [hot-reloading components during development](https://github.com/gaearon/react-transform-hmr), React and its ecosystem of add-ons and tooling bring a huge boost to performance and developer productivity.

Static websites aren't going away any time soon, and they're a great choice for things like documentation sites, blogs, marketing sites, etc., so now projects like [gatsby][], [sitegen][], and [statinamic][] leverage React and [webpack](http://webpack.github.io/) to make static sites more flexible and faster to develop, and improve perceived performance for the user of the site.

### Comparison
In this post, I'm going to compare each of the above three static site generators based on two kinds of criteria: **core features** which I think should be required as part of every generator, and **bonus features** which are nice add-ons, but not necessarily required:

##### Core Features
* Use React components to define the structure of layouts and pages, including the root `<html>...</html>` layout.

  **Gatsby**:
    - Define your root `<html>` component in the special file _&lt;project&gt;/html.jsx_. For development, you must define a `<div id='react-mount'>` element where the React app will be mounted. When building the site for production, a `props.body` HTML string will be passed which must be rendered in the `<div id='react-mount'>` using [`dangerouslySetInnerHTML`](https://facebook.github.io/react/tips/dangerously-set-inner-html.html).
    - Create page components in the special directory _&lt;project&gt;/pages/_. React components in this directory will be transformed into plain HTML files matching the component's position in the _pages/_ directory. A special *pages/_template.jsx* file must be defined; it will be rendered in the root `<html>` component, and its `render()` method should return a [`<RouteHandler />`](https://github.com/rackt/react-router/blob/v0.13.5/doc/03%20Components/RouteHandler.md) where regular page components will be rendered.

  **Sitegen**:

  **Statinamic**:

* Author content using a plaintext markup language (e.g. Markdown), with the ability to define arbitrary metadata (e.g. title, description) and specify a custom layout in which the content will be rendered.

  **Gatsby**:
    - Support for arbitrary metadata, but no built-in layout support: all Markdown files currently must use the same layout: the [_gatsby/lib/isomorphic/wrappers/md.jsx_](https://github.com/gatsbyjs/gatsby/blob/9658bacd4f3b582d77dd291c18a13db4561b32ab/lib/isomorphic/wrappers/md.jsx) component (or a custom _&lt;project&gt;/wrappers/md.jsx_ component).

* Directory-based routing: the path to a page matches its location on the file system.

  **Gatsby**:
    - Yes: components and documents in _&lt;project&gt;/pages/_ will have their resulting static HTML output to the matching path.

* Static HTML files are generated for *every* static route as part of the build step.

  **Gatsby**:
    - Yes in the production build, however not during development. In development, the same HTML template is rendered for every route, then the app mounts onto `<div id='react-mount'>` on the client.

* Client-side routing takes over for instant page transitions once a page is loaded by the browser.

  **Gatsby**:
    - Yes.

* Able to generate client-side links in both React components *and* Markdown pages.

  **Gatsby**:
    - Yes.

* Able to extend with custom module loaders (e.g. for CoffeeScript or reStructuredText).

  **Gatsby**:
    - Yes, by [customizing the webpack configuration](https://github.com/gatsbyjs/gatsby/blob/master/README.md#how-to-use-your-own-webpack-loaders).

* Minimal API surface area: by default, little to no configuration should be required to get started, and extending/customizing behaviour should be simple and easy.

  **Gatsby**:
    - A bit too much required configuration (_app.js_, _config.toml_, _html.jsx_, *pages/_template.jsx*); I think this could be better reduced to just one configuration file (e.g. _app.js_) and one root component (_html.jsx_).
    - A [good API to extend the default webpack configuration](), however [only _.html_ and _.md_ "wrappers" are currently supported](https://github.com/gatsbyjs/gatsby/blob/9658bacd4f3b582d77dd291c18a13db4561b32ab/lib/isomorphic/create-routes.coffee#L55).

* Easy-to-use development mode: start a development server with a single command, with in-browser debugging support and sane error messages.

  **Gatsby**:
    - Good CLI: just run `gatsby develop` to start the development server.
    - Uses [`devtool: 'eval'`](http://webpack.github.io/docs/configuration.html#devtool) by default, thus leveraging webpack's excellent in-browser error reporting:

      ![webpack syntax error message](https://www.dropbox.com/s/tckazyg49pernio/Screenshot%202015-12-31%2013.03.34.png?dl=1)

    - No logging or error reporting on the command line.

* Able to include arbitrary assets (e.g. robots.txt) in the generated static site.

  **Gatsby**:
    - Yes: simply put your static file in the _pages/_ directory and it will be output to the matching location in the output directory.

* The production-ready static site is optimized for size: at a minimum, JS and CSS are minified.

  **Gatsby**:
    - JS is minified as part of `gatsby build`; inline CSS is enabled by default via [style-loader](https://github.com/webpack/style-loader), but outputting a separate minified CSS asset [must be configured manually](https://github.com/gatsbyjs/gatsby/blob/8b421bc8f393f4e4ca022c7b62811a67af866d2c/README.md#how-to-use-your-own-webpack-plugins).

* A default 404 page, and the ability to provide a custom one.

  **Gatsby**:
    - For client-side routing, there's no default 404 page, and no custom 404 page can be configured. A _pages/404.jsx_ component may be used to generate a server _/404.html_ for use by e.g. [GitHub Pages](https://help.github.com/articles/custom-404-pages/).

* An API to access all site data from within React components (e.g. to enumerate all pages and their metadata).

  **Gatsby**:
    - Each page component is passed props `config` (site configuration), `pages` (all site pages), `page` (current page), and `state` (router state).

##### Bonus features
* Hot module replacement: updating a component reloads only the changed component.

  **Gatsby**:
    - Yes, built into `gatsby develop`.

* Lazily-loaded modules (i.e. code splitting): the initial JS bundle is small; additional modules (e.g. other pages) are downloaded on-the-fly.

  **Gatsby**:
    - No.

* Able to define custom path redirects.

  **Gatsby**:
    - No.

* Able to serve site on a prefixed path (e.g. a GitHub pages project site).

  **Gatsby**:
    - Yes, by [using the `link` helper and `linkPrefix` option](https://github.com/gatsbyjs/gatsby#deploying-to-github-pages-and-other-hosts-where-your-sites-links-need-prefixes).

* Preconfigured project templates are available for different use cases, e.g. documentation sites / blogs.

  **Gatsby**:
    - Yes, via [starters](https://github.com/gatsbyjs/gatsby#gatsby-starters).

* Able to persist state between client-side page transitions, e.g. a menu open/close state.

  **Gatsby**:
    - Only by using [`setState`](https://facebook.github.io/react/docs/component-api.html#setstate) in higher components.

* Support for localization.

  **Gatsby**:
    - No built-in support.

* Support for generating [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(standard) feeds.

  **Gatsby**:
    - No.

* First-class support for GitHub pages: easily publish the static site with a single command.

  **Gatsby**:
    - No.


[gatsby]: https://github.com/gatsbyjs/gatsby
[sitegen]: http://sitegen.github.io/
[statinamic]: http://moox.io/statinamic/
