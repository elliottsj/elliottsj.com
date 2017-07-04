import Link from 'next/link';
import { FormattedDate } from 'react-intl';

import Layout from 'components/Layout';

import * as post20140109 from './posts/2014-01-09-public-key-authentication-on-cdf';
import * as post20160504 from './posts/2016-05-04-test';

function PostLinks({ children }) {
  return (
    <ul>
      <style jsx>{`
        ul {
          margin-left: 0;
          list-style: none;
        }
      `}</style>
      {children}
    </ul>
  );
}

function PostLink({ post: { date, href, title } }) {
  return (
    <li>
      <style jsx>{`
        li {
          margin-bottom: 30px;
        }
        span {
          font-size: 14px;
          color: #828282;
        }
        a {
          display: block;
          font-size: 24px;
        }
      `}</style>
      <span>
        <FormattedDate value={date} year="numeric" month="long" day="numeric" />
      </span>
      <h2>
        <Link prefetch href={href}>
          <a>
            {title}
          </a>
        </Link>
      </h2>
    </li>
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
      `}</style>
      <h1>Posts</h1>
      <PostLinks>
        <PostLink post={post20140109} />
        <PostLink post={post20160504} />
      </PostLinks>
    </main>
  );
}

export default () =>
  <Layout>
    <Main />
  </Layout>;
