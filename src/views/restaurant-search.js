import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
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
        <div className="restaurant-search-container1"></div>
      </div>
    </div>
  )
}

export default RestaurantSearch
