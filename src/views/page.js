import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="Page - cs4800-restaurant-recommender"
        />
      </Helmet>
    </div>
  )
}

export default Page
