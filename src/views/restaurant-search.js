import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import RestaurantCard1 from '../components/restaurant-card1'
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
      <Title
        text="Use the search bar to find a restaurant."
        heading="Search"
        rootClassName="title-root-class-name1"
      ></Title>
      <SearchBar></SearchBar>
      <div className="restaurant-search-gallery">
        <div className="restaurant-search-container1">
          <RestaurantCard1 rootClassName="rootClassName12"></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName13"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName14"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName15"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName16"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName17"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName18"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName19"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName20"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName21"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName22"
          ></RestaurantCard1>
          <RestaurantCard1
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
            rootClassName="rootClassName23"
          ></RestaurantCard1>
        </div>
      </div>
    </div>
  )
}

export default RestaurantSearch
