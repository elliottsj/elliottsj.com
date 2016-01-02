import React from 'react'
import { FormattedDate } from 'react-intl'
import { includePages, pages, Link, Meta } from 'sitegen'

export const route = includePages('./posts/*.md')

export class component extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {/*
          <header className='post-header'>
            <h1>{title}</h1>
            <p className='meta'>
              <FormattedDate
                value={date}
                day='numeric'
                month='long'
                year='numeric' />
            </p>
          </header>
        */}
        <article className='post-content'>
          {children}
        </article>
      </div>
    )
  }
}
