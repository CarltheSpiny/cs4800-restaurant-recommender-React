import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import './landing-page.css'
import NavigatorBar from '../components/navigator-bar'
import FetchPage from '../components/http-request'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const url = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/HelloWorld'


const Landing = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Directory for Devs</title>
        <meta property="og:title" content="Directory" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <div className="page-container1">
        <h1>Directory</h1>
        <span>Use the links below to get to any page</span>
      </div>
      <div>
        <h1>Fetch Page Example</h1>
        <FetchPage url={url} />
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
        <Link to="/history-test">
            TestHistory
        </Link>
        </h1>
      </div>
    </div>
  );
}

export default Landing
