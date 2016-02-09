import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import {
  Link,
  query,
  withQuery,
} from 'nucleate';
import React from 'react';
import { FormattedDate } from 'react-intl';

const filterPosts = pipe(
  filter(post => post.fullPath !== '/posts'),
  sortBy(post => new Date(post.meta.date)),
);

function PostsIndex({ posts }) {
  return (
    <div className="home">
      <ul className="post-list">
        {filterPosts(posts).map(post => (
          <li key={post.path}>
            <span className="post-meta">
              {post.meta.date && (
                <FormattedDate
                  value={post.meta.date}
                  day="numeric"
                  month="long"
                  year="numeric"
                />
              )}
            </span>
            <Link className="post-link" to={post.fullPath}>{post.meta.title}</Link>
          </li>
        ))}
      </ul>

      <p className="rss-subscribe">subscribe <a href="/feed.xml">via RSS</a></p>

    </div>
  );
}

export const component = withQuery({
  posts: query('/posts'),
})(PostsIndex);

