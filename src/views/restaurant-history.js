import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './restaurant-history.css'

const RestaurantHistory = (props) => {
  // Access the logged in user's information
  const { state } = props.location;
  // Check if AccountData is defined (state if undefined, state.apiData otherwise)
  var accountData = state && state.accountData;

  // Restraunt API url and headers
  const restrauntUrl = `https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?email=${accountData.email.S}`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  useEffect(() => {
    
  });

  const loadLiked = async() => {
    try {
      var requestOoptions = {
        method: 'GET',
        redirect: 'follow',
        header: headers
      }

      const getLiked = await fetch(restrauntUrl, requestOptions);
      const jsonData = await getLiked.json();

      console.log("JSON = " + JSON.stringify(jsonData.restaurants[6]))
      console.info("Length: " + Object.keys(jsonData.restaurants).length)

    } catch (error) {
      console.error("Error: " + error)
    }
  }

  return (
    <div className="restaurant-history-container">
      <Helmet>
        <title>RestaurantHistory</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }></NavigatorBar>
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
