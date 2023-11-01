import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RestaurantCard1 from '../components/restaurant-card1'
import './personal-home.css'

const PersonalHome = (props) => {
  return (
    <div className="personal-home-container">
      <Helmet>
        <title>cs4800-restaurant-recommender</title>
        <meta property="og:title" content="cs4800-restaurant-recommender" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <Title
        text="Your personalized feed of restaurants we think you'll love!"
        heading="Your Feed"
        rootClassName="title-root-class-name"
      ></Title>
      <div className="personal-home-gallery">
        <div className="personal-home-container1">
          <RestaurantCard1 rootClassName="rootClassName"></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName1"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName3"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName2"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName4"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName5"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName6"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName7"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName8"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName9"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName10"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName11"
          ></RestaurantCard1>
        </div>
      </div>
    </div>
  )
}

export default PersonalHome
