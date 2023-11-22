import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './restaurant-history.css'

const RestaurantHistory = (props) => {
  return (
    <div className="restaurant-history-container">
      <Helmet>
        <title>RestaurantHistory</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2"></NavigatorBar>
      <Title
        text="A list of all the restaurants you have visited or rated."
        heading="Your Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <SearchBar
        searchInput="Search your history..."
        rootClassName="search-bar-root-class-name"
      ></SearchBar>
      <div className="restaurant-history-gallery">
        <div className="restaurant-history-container1">
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="restaurant-history-search-result-1"
            indexForRestaurant={0}
          ></RatedRestrauntCard>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHistory
