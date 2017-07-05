import Head from 'next/head';
import { IntlProvider } from 'react-intl';

const Wrapper = ({ children }) =>
  <div className="wrapper">
    <style jsx>{`
      div {
        max-width: -webkit-calc(800px - (30px * 2));
        max-width: calc(800px - (30px * 2));
        margin-right: auto;
        margin-left: auto;
        padding-right: 30px;
        padding-left: 30px;
      }
      @media screen and (max-width: 800px) {
        div {
          max-width: -webkit-calc(800px - (30px));
          max-width: calc(800px - (30px));
          padding-right: 15px;
          padding-left: 15px;
        }
      }
      div:after {
        content: "";
        display: table;
        clear: both;
      }
    `}</style>
    {children}
  </div>;

const Content = ({ children }) =>
  <main aria-label="Content">
    <style jsx>{`
      main {
        padding: 30px 0;
      }
    `}</style>
    <Wrapper>
      {children}
    </Wrapper>
  </main>;

const SiteTitle = () =>
  <a className="site-title" href="/">
    <style jsx>{`
      a {
        font-size: 26px;
        font-weight: 300;
        line-height: 54px;
        letter-spacing: -1px;
        margin-bottom: 0;
        float: left;
      }
      a,
      a:visited {
        color: #424242;
      }
    `}</style>
    Spencer Elliott
  </a>;

const SiteNav = () =>
  <nav className="site-nav">
    <style jsx>{`
      nav {
        float: right;
        line-height: 54px;
      }
      nav .nav-trigger {
        display: none;
      }
      nav .menu-icon {
        display: none;
      }
      nav .page-link {
        color: #111;
        line-height: 1.5;
      }
      nav .page-link:not(:last-child) {
        margin-right: 20px;
      }
      @media screen and (max-width: 600px) {
        nav {
          position: absolute;
          top: 9px;
          right: 15px;
          background-color: #fdfdfd;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
          text-align: right;
        }
        nav label[for="nav-trigger"] {
          display: block;
          float: right;
          width: 36px;
          height: 36px;
          z-index: 2;
          cursor: pointer;
        }
        nav .menu-icon {
          display: block;
          float: right;
          width: 36px;
          height: 26px;
          line-height: 0;
          padding-top: 10px;
          text-align: center;
        }
        nav .menu-icon > svg path {
          fill: #424242;
        }
        nav input ~ .trigger {
          clear: both;
          display: none;
        }
        nav input:checked ~ .trigger {
          display: block;
          padding-bottom: 5px;
        }
        nav .page-link {
          display: block;
          padding: 5px 10px;
          margin-left: 20px;
        }
        nav .page-link:not(:last-child) {
          margin-right: 0;
        }
      }
    `}</style>
    <input type="checkbox" id="nav-trigger" className="nav-trigger" />
    <label htmlFor="nav-trigger">
      <span className="menu-icon">
        <svg viewBox="0 0 18 15" width="18px" height="15px">
          <path
            fill="#424242"
            d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
          />
          <path
            fill="#424242"
            d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
          />
          <path
            fill="#424242"
            d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
          />
        </svg>
      </span>
    </label>
    <div className="trigger">
      <a className="page-link" href="/about/">
        About
      </a>
    </div>
  </nav>;

const Header = () =>
  <header role="banner">
    <style jsx>{`
      header {
        border-top: 5px solid #424242;
        border-bottom: 1px solid #e8e8e8;
        min-height: 55.95px;
        position: relative;
      }
    `}</style>
    <Wrapper>
      <SiteTitle />
      <SiteNav />
    </Wrapper>
  </header>;

const Footer = () =>
  <footer className="site-footer">
    <style jsx>{`
      footer {
        border-top: 1px solid #e8e8e8;
        padding: 30px 0;
      }
      h2 {
        font-size: 18px;
        margin-bottom: 15px;
      }
      .contact-list,
      .social-media-list {
        list-style: none;
        margin-left: 0;
      }
      .footer-col-wrapper {
        font-size: 15px;
        color: #828282;
        margin-left: -15px;
      }
      .footer-col {
        float: left;
        margin-bottom: 15px;
        padding-left: 15px;
      }
      .footer-col-1 {
        width: -webkit-calc(35% - (30px / 2));
        width: calc(35% - (30px / 2));
      }
      .footer-col-2 {
        width: -webkit-calc(20% - (30px / 2));
        width: calc(20% - (30px / 2));
      }
      .footer-col-3 {
        width: -webkit-calc(45% - (30px / 2));
        width: calc(45% - (30px / 2));
      }
      @media screen and (max-width: 800px) {
        .footer-col-1,
        .footer-col-2 {
          width: -webkit-calc(50% - (30px / 2));
          width: calc(50% - (30px / 2));
        }
        .footer-col-3 {
          width: -webkit-calc(100% - (30px / 2));
          width: calc(100% - (30px / 2));
        }
      }
      @media screen and (max-width: 600px) {
        .footer-col {
          float: none;
          width: -webkit-calc(100% - (30px / 2));
          width: calc(100% - (30px / 2));
        }
      }
      /* *
       * Icons */
      .icon > svg {
        display: inline-block;
        vertical-align: middle;
      }
      .icon > svg path {
        fill: #828282;
      }
      .social-media-list .icon {
        padding-right: 5px;
      }
      .social-media-list li + li {
        padding-top: 5px;
      }
    `}</style>
    <Wrapper>
      <div className="footer-col-wrapper">
        <div className="footer-col footer-col-1">
          <ul className="contact-list">
            <li>Spencer Elliott</li>
            <li>
              <a href="mailto:me@elliottsj.com">me@elliottsj.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col-2">
          <ul className="social-media-list">
            <li>
              <a href="https://github.com/elliottsj">
                <span className="icon icon--github">
                  <svg viewBox="0 0 16 16" width="16px" height="16px">
                    <path
                      fill="#828282"
                      d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
                    />
                  </svg>
                </span>
                <span className="username">elliottsj</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/spe_">
                <span className="icon icon--twitter">
                  <svg viewBox="0 0 16 16" width="16px" height="16px">
                    <path
                      fill="#828282"
                      d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"
                    />
                  </svg>
                </span>
                <span className="username">spe_</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  </footer>;

const Layout = ({ children }) =>
  <IntlProvider locale="en">
    <div>
      <Head>
        <title>Spencer Elliott</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
        /**
         * Reset some basic elements
         */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        hr,
        dl,
        dd,
        ol,
        ul,
        figure {
          margin: 0;
          padding: 0;
        } /**
         * Basic styling
         */
        body {
          font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #111;
          background-color: #fdfdfd;
          -webkit-text-size-adjust: 100%;
          -webkit-font-feature-settings: "kern" 1;
          -moz-font-feature-settings: "kern" 1;
          -o-font-feature-settings: "kern" 1;
          font-feature-settings: "kern" 1;
          font-kerning: normal;
        } /**
         * Set 'margin-bottom' to maintain vertical rhythm
         */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        ul,
        ol,
        dl,
        figure,
        .highlight {
          margin-bottom: 15px;
        } /**
         * Images
         */
        img {
          max-width: 100%;
          vertical-align: middle;
        } /**
         * Figures
         */
        figure > img {
          display: block;
        }
        figcaption {
          font-size: 14px;
        } /**
         * Lists
         */
        ul,
        ol {
          margin-left: 30px;
        }
        li > ul,
        li > ol {
          margin-bottom: 0;
        }
        /**
         * Headings
         */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 400;
        }
        /**
         * Links
         */
        a {
          color: #2a7ae2;
          text-decoration: none;
        }
        a:visited {
          color: #1756a9;
        }
        a:hover {
          color: #111;
          text-decoration: underline;
        }
        .social-media-list a:hover {
          text-decoration: none;
        }
        .social-media-list a:hover .username {
          text-decoration: underline;
        }
        /**
         * Blockquotes
         */
        blockquote {
          color: #828282;
          border-left: 4px solid #e8e8e8;
          padding-left: 15px;
          font-size: 18px;
          letter-spacing: -1px;
          font-style: italic;
        }
        blockquote > :last-child {
          margin-bottom: 0;
        } /**
         * Code formatting
         */
        pre,
        code {
          font-size: 15px;
          border: 1px solid #e8e8e8;
          border-radius: 3px;
          background-color: #eef;
        }
        code {
          padding: 1px 5px;
        }
        pre {
          padding: 8px 12px;
          overflow-x: auto;
        }
        pre > code {
          border: 0;
          padding-right: 0;
          padding-left: 0;
        }
      `}</style>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  </IntlProvider>;

export default Layout;
