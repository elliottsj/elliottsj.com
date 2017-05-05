import Link from 'next/link';

import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';

import { href as href1 } from './posts/2014-01-09-public-key-authentication-on-cdf';
import { href as href2 } from './posts/2016-05-04-test';

function PostLinks({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function PostLink({ href }) {
  return (
    <Link prefetch href={href}>
      <a>
        <style jsx>{`
          a {
            display: block;
            font-size: 24px;
          }
        `}</style>
        link
      </a>
    </Link>
  );
}

function Main() {
  return (
    <main aria-label="Content">
      <style jsx>{`
        main {
          padding: 30px 0;
        }
        h1 {
          font-size: 20px;
        }
        ul {
          margin-left: 0;
          list-style: none;
        }
        ul > li {
          margin-bottom: 30px;
        }
        span {
          font-size: 14px;
          color: #828282;
        }
      `}</style>
      <h1>Posts</h1>
      <ul>
        <li>
          <span>May 4, 2017</span>
          <h2>
            <PostLink href="/posts/2014-01-09-public-key-authentication-on-cdf" />
          </h2>
        </li>
        <li>
          <span>May 4, 2017</span>
          <h2>
            <PostLink href="/posts/2016-05-04-test" />
          </h2>
        </li>
      </ul>
    </main>
  );
}

export default () => (
  <Layout>
    <Main />
  </Layout>
)
