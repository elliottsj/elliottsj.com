import moment from 'moment';

import Layout from './Layout';

const PostLayout = ({ children, date, title }) =>
  <Layout>
    <article itemScope itemType="http://schema.org/BlogPosting">
      <style jsx>{`
        .post-header {
          margin-bottom: 30px;
        }
        .post-title {
          font-size: 42px;
          letter-spacing: -1px;
          line-height: 1;
        }
        @media screen and (max-width: 800px) {
          .post-title {
            font-size: 36px;
          }
        }
        .post-content {
          margin-bottom: 30px;
        }
        .post-content h2 {
          font-size: 32px;
        }
        @media screen and (max-width: 800px) {
          .post-content h2 {
            font-size: 28px;
          }
        }
        .post-content h3 {
          font-size: 26px;
        }
        @media screen and (max-width: 800px) {
          .post-content h3 {
            font-size: 22px;
          }
        }
        .post-content h4 {
          font-size: 20px;
        }
        @media screen and (max-width: 800px) {
          .post-content h4 {
            font-size: 18px;
          }
        }
      `}</style>
      <header className="post-header">
        <h1 className="post-title" itemProp="name headline">
          {title}
        </h1>
        <p className="post-meta">
          <time dateTime={moment(date).format()} itemProp="datePublished">
            {moment(date).format('D MMMM, YYYY')}
          </time>
        </p>
      </header>
      <div className="post-content" itemProp="articleBody">
        {children}
      </div>
    </article>
  </Layout>;

export default PostLayout;
