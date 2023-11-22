import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restraunt-card'
import './personal-home.css'

const PersonalHome = (props) => {
  // Access a user's information
  const { state } = props.location;
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.apiData;

  return (
    <div className="personal-home-container">
      <Helmet>
        <title>cs4800-restaurant-recommender</title>
        <meta property="og:title" content="cs4800-restaurant-recommender" />
      </Helmet>
      <NavigatorBar userData={userData}></NavigatorBar>
      <Title
        text="Your personalized feed of restaurants we think you'll love!"
        heading="Your Feed"
        rootClassName="title-root-class-name"
      ></Title>
      <div className="personal-home-gallery">
        <Link to="/restraunt-rating">
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-root-class-name"
            className="personal-home-component2"
          ></RatedRestrauntCard>
        </Link>
        <Link to="/restraunt-rating">
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-root-class-name1"
            className="personal-home-component3"
          ></RatedRestrauntCard>
        </Link>
        <Link to="/restraunt-rating">
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-root-class-name2"
            className="personal-home-component4"
          ></RatedRestrauntCard>
        </Link>
      </div>
    </div>
  )
}

export default PersonalHome
