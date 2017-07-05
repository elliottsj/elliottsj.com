import Link from 'next/link';
import { FormattedDate } from 'react-intl';

import Layout from 'components/Layout';

import * as post20140109 from './posts/2014-01-09-public-key-authentication-on-cdf';
import * as post20140726 from './posts/2014-07-26-configuring-a-staging-environment-with-rails-on-dokku';
import * as post20140927 from './posts/2014-09-27-csc309-deploying-the-right-way';
import * as post20141025 from './posts/2014-10-25-using-git-with-markus';
import * as post20141115 from './posts/2014-11-15-deploying-a-codeigniter-app-on-dokku';

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

export default () =>
  <Layout>
    <style jsx>{`
      h1 {
        font-size: 20px;
      }
    `}</style>
    <PostLinks>
      <PostLink post={post20141115} />
      <PostLink post={post20141025} />
      <PostLink post={post20140927} />
      <PostLink post={post20140726} />
      <PostLink post={post20140109} />
    </PostLinks>
  </Layout>;
