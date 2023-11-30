import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './personal-home.css'

const PersonalHome = (props) => {
  const [jsonData, setData] = useState(null);
  // Access a user's information
  const { state } = props.location;
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.accountData;
  console.log("User has logged in with: " + JSON.stringify(userData));

  return (
    <div className="personal-home-container">
      <Helmet>
        <title>cs4800-restaurant-recommender</title>
        <meta property="og:title" content="cs4800-restaurant-recommender" />
      </Helmet>
      <NavigatorBar accountData={ userData }></NavigatorBar>
      <Title
        text="Your personalized feed of restaurants we think you'll love!"
        heading="Your Feed"
        rootClassName="title-root-class-name"
      ></Title>
      <div className="personal-home-gallery">
        
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-1"
          className="personal-home-component1"
          indexForRestaurant={0}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-2"
          className="personal-home-component2"
          indexForRestaurant={1}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-3"
          className="personal-home-component3"
          indexForRestaurant={2}
        ></RatedRestrauntCard>
      </div>
    </div>
  )
}

export default PersonalHome