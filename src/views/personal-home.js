import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import opencage from 'opencage-api-client'
import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './personal-home.css'

const PersonalHome = (props) => {
  const [restrauntData, setData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [currentAddress, setAddress] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [fetchedRecommendation, setFetched] = useState(false);

  // <--------------------Access a user's information --------------------->
  const { state } = props.location;
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.accountData;
  // <--------------------Access a user's information --------------------->

  // Geolocation 
  const api_key = '68cf56fa9c6a4506a10ff5550808ded7'
  const api_url = 'https://api.opencagedata.com/geocode/v1/json'
  
  // Restaurant Recomendation
  const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
  const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  useEffect(() => {
    // console.log("User has logged in with: " + JSON.stringify(userData));

    // <-------------- Coordinates and Reverse Geosearch --------------------->
    const getCoords = async () => {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
              const { latitude, longitude} = position.coords;
              console.info("Latitude:", latitude);
              console.info("Longitude:", longitude);
              var currentPos = latitude + ',' + longitude
              setCoordinates(position.coords)
              getAddress(currentPos)
              }
          )
      }
    }

    const getAddress = async (geolocation) => {
      var stringIsInvalid = geolocation === undefined ||
                            typeof geolocation !== 'string' ||
                            geolocation.length < 1;

        if(stringIsInvalid) {
            console.error("URI component would be undefined, aborting fetch")
            console.warn("Errorneus String: " + geolocation)
            return;
        };

        console.info("Fetching from api")
        opencage.geocode({ key: api_key, q: geolocation }).then(response => {
            setAddress(response.results[0].formatted)
            fetchReccomendation(response.results[0].formatted);
        }).catch(err => {
            console.error(err);
        })
    }

    // <-------------- End Coordinates and Reverse Geosearch --------------------->

    const fetchReccomendation = async (backAddress) => {
      if (fetchedRecommendation) {
        console.warn("Recomendation had been fetched; Will not fetch a new reccomendation")
        return;
      }
  
      const requestBody = {
        "message" : "",
        "location" : backAddress,
        "liked_restaurants" : []
      }
  
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        header: headers,
        body: JSON.stringify(requestBody, null, 2)
      };

      try {
        const response = await fetch(apiUrl, requestOptions)
        const data = await response.json()
        console.log("Personal Home: JSON response: ", data)
        setData(data)
        setFetched(true)
      } catch (error) {
        console.log("Personal Home: Error: " + error)
        setError(true);
      } finally {
          setLoading(false)
      }
    }

    getCoords()
 }, [])

 var testforUrl = (
  <p>
    Text1
  </p>
 )
 var testforUrl2 = (
  <p>
    Text2???
  </p>
 )

 testforUrl = testforUrl + <p>????</p>

 if (isError) {
  console.log("Error loading restaurants!")
  return(
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
        <div>
          {currentAddress && <p>Current Address: {currentAddress}</p>}
        </div>
        <div className="personal-home-gallery">
        <h2>An error occured when getting your feed.</h2>
        </div>
      </div>
  )
 }

  if (isLoading) {
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
          rootClassName
          ="title-root-class-name"
        ></Title>
        <div className="personal-home-gallery">
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  else {
    console.log("Personal Page: Page loaded!")
    return (
      <div className="personal-home-container">
        <Helmet>
          <title>Home</title>
          <meta property="og:title" content="cs4800-restaurant-recommender" />
        </Helmet>
        <NavigatorBar accountData={ userData }></NavigatorBar>
        <Title
          text="Your personalized feed of restaurants we think you'll love!"
          heading="Your Feed"
          rootClassName="title-root-class-name"
        ></Title>
        <div>
          {currentAddress && <p>Current Address: {currentAddress}</p>}
        </div>
        <div className="personal-home-gallery">
          
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={0}
            reccomendedRestaurants={restrauntData}
            isLoadingPage={isLoading}
            accountData={ userData }
          ></RatedRestrauntCard>

          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={1}
            reccomendedRestaurants={restrauntData}
            isLoadingPage={isLoading}
            accountData={ userData }
          ></RatedRestrauntCard>

          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={2}
            reccomendedRestaurants={restrauntData}
            isLoadingPage={isLoading}
            accountData={ userData }
          ></RatedRestrauntCard>
          
        </div>
      </div>
    )
  }

  
}

export default PersonalHome