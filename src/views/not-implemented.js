import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './not-implemented.css'

const NotImplemented = (props) => {
  return (
    <div id="404-page" className="not-implemented-container">
      <Helmet>
        <title>NotImplemented - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="NotImplemented - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name5"></NavigatorBar>
      <div className="not-implemented-container1">
        <h1>The requested page could not be found.</h1>
        <span>Please use the buttons above to go back to the main site.</span>
      </div>
    </div>
  )
}

export default NotImplemented
