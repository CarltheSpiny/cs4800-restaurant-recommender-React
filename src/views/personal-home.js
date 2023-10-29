import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './personal-home.css'

const PersonalHome = (props) => {
  return (
    <div className="personal-home-container">
      <Helmet>
        <title>cs4800-restaurant-recommender</title>
        <meta property="og:title" content="cs4800-restaurant-recommender" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <div className="personal-home-container1">
        <h1>Home</h1>
        <span>Your Personalized Feed</span>
      </div>
    </div>
  )
}

export default PersonalHome
