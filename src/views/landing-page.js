import React from 'react'

import { Helmet } from 'react-helmet'

import './landing-page.css'
import NavigatorBar from '../components/navigator-bar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Landing = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <div className="page-container1">
        <h1>Directory</h1>
        <span>Use the links below to get to any page</span>
      </div>
      <div>
        <h1>
        <Link to="/">
            PersonalHome
        </Link>
        </h1>
        <h1>
        <Link to="/survey">
            Survey
        </Link>
        </h1>
        <h1>
        <Link to="/user-information">
            UserInformation
        </Link>
        </h1>
        <h1>
        <Link to="/registration">
            UserRegistration
        </Link>
        </h1>
        <h1>
        <Link to="/restaurant-search">
            RestaurantSearch
        </Link>
        </h1>
        <h1>
        <Link to="/user-login">
            UserLogin
        </Link>
        </h1>
        <h1>
        <Link to="/rating-from-survey">
            RatingFromSurvey
        </Link>
        </h1>
        <h1>
        <Link to="/**">
            404NotFound
        </Link>
        </h1>
        <h1>
        <Link to="/restraunt-rating">
            RestrauntRating
        </Link>
        </h1>
        <h1>
        <Link to="/restaurant-history">
            RestaurantHistory
        </Link>
        </h1>
      </div>
    </div>
  )
}

export default Landing
