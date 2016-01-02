import React from 'react'
import { FormattedDate } from 'react-intl'
import { includePages, pages, Link, Meta } from 'sitegen'

export class component extends React.Component {
  render() {
    const posts = pages('./posts/*.md')
    return (
      <div className='home'>
        <ul className='post-list'>
          {posts.map(post => (
            <li key={post.path}>
              <span className='post-meta'>
                <FormattedDate
                  value={post.date}
                  day='numeric'
                  month='long'
                  year='numeric' />
              </span>
              <Link className='post-link' page={post}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <p className='rss-subscribe'>subscribe <a href='/feed.xml'>via RSS</a></p>

      </div>
    )
  }
}
