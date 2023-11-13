import React from "react";
import { Helmet } from "react-helmet";
import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import RatedRestrauntCard from '../components/rated-restraunt-card'

const HistoryTest = (props) => {
    return (
        <div className="restaurant-history-container">
          <Helmet>
            <title>RestaurantHistory - cs4800-restaurant-recommender</title>
            <meta
              property="og:title"
              content="RestaurantHistory - cs4800-restaurant-recommender"
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
              <RatedRestrauntCard rootClassName="rated-restraunt-card-root-class-name3"></RatedRestrauntCard>
            </div>
          </div>
        </div>
      )
}

export default HistoryTest