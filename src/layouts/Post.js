import React from 'react'
import { FormattedDate } from 'react-intl'
import DefaultLayout from './Default'

export default function Post ({ children, date, meta, title }) {
  return (
    <DefaultLayout>
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

      <article className='post-content'>
        {children}
      </article>

    </DefaultLayout>
  )
}
