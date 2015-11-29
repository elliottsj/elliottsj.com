import React, { Component, PropTypes } from 'react'
import { FormattedDate } from 'react-intl'
import { page, connect, Link } from 'nucleate'

import DefaultLayout from '../layouts/Default'

class Home extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    title: PropTypes.string
  }

  static defaultProps = {
    posts: [
      { title: 'One' },
      { title: 'Two' }
    ]
  }

  render () {
    const { posts } = this.props
    return (
      <DefaultLayout>
        <div className='home'>
          <ul className='post-list'>
            {Object.keys(posts).map(name =>
              posts[name].title && (
                <li key={name}>
                  <span className='post-meta'>
                    <FormattedDate
                      value={posts[name].date}
                      day='numeric'
                      month='long'
                      year='numeric' />
                  </span>
                  <Link className='post-link' to={posts[name].path}>{posts[name].title}</Link>
                </li>
              )
            )}
          </ul>

          <p className='rss-subscribe'>subscribe <a href='/feed.xml'>via RSS</a></p>

        </div>
      </DefaultLayout>
    )
  }
}

const HomePage = page({
  title: 'Home'
})(Home)

function select (state) {
  return {
    posts: state.nucleate.pages.posts
  }
}

export default connect(select)(HomePage)
