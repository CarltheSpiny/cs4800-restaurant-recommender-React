import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './restaurant-viewer.css'

const RestaurantViewer = (props) => {
  return (
    <div className="restaurant-viewer-container">
      <Helmet>
        <title>RestaurantViewer - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RestaurantViewer - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2"></NavigatorBar>
    </div>
  )
}

export default RestaurantViewer
