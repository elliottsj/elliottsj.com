import React, { PropTypes } from 'react';
import { FormattedDate } from 'react-intl';

function PostLayout({ children, date, title }) {
  return (
    <div>
      <header className="post-header">
        <h1>{title}</h1>
        <p className="meta">
          <FormattedDate
            value={date}
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

PostLayout.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostLayout;
