import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './rating-history.css'

const RatingHistory = (props) => {
  return (
    <div className="rating-history-container">
      <Helmet>
        <title>RatingHistory - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RatingHistory - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="rating-history-image"
      />
      <div className="rating-history-header">
        <h1 className="rating-history-title">&lt;Restaurant Name&gt;</h1>
      </div>
      <div className="rating-history-container1"></div>
    </div>
  )
}

export default RatingHistory
