import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './restaurant-search.css'

const RestaurantSearch = (props) => {
  return (
    <div className="restaurant-search-container">
      <Helmet>
        <title>RestaurantSearch - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RestaurantSearch - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name1"></NavigatorBar>
    </div>
  )
}

export default RestaurantSearch
