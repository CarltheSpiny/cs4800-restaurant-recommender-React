import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './personal-home.css'
import ExampleOut from '../components/get-restaurant-reccomendation.json'

const PersonalHome = (props) => {
  const [jsonData, setData] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  // Access a user's information
  const { state } = props.location;
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.accountData;
  
  const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
  const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'  
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

 useEffect(() => {
    console.log("User has logged in with: " + JSON.stringify(userData));

    const requestBody = {
      "message" : "i want to eat some spicy food",
      "location" : cppAddress,
      "liked_restaurants" : []
    }

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      header: headers,
      body: JSON.stringify(requestBody, null, 2)
    };

    const fetchReccomendation = async () => {
      try {
        console.log("Fetching a recommendation...")
        const response = await fetch(apiUrl, requestOptions)
        const data = await response.json()
        console.log("Personal Home: JSON response: ", data)
        console.log(response.status)
        setData(data)
      } catch (error) {
        console.log("Personal Home: Error: " + error)
        setError(true);
      } finally {
          setLoading(false)
      }
    }

    fetchReccomendation()
 }, [])

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
        <div className="personal-home-gallery">
        <h2>An error occured when getting your feed.</h2>
        </div>
      </div>
  )
 }

  if (isLoading) {
    console.log("Loading page...");
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
          isLoadingPage={true}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-2"
          className="personal-home-component2"
          isLoadingPage={true}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-2"
          className="personal-home-component2"
          isLoadingPage={true}
        ></RatedRestrauntCard>
        </div>
      </div>
    )
  }

  console.log("Page loaded!")
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
          reccomendedRestaurants={jsonData}
          isLoadingPage={false}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-2"
          className="personal-home-component2"
          indexForRestaurant={1}
          reccomendedRestaurants={jsonData}
          isLoadingPage={false}
        ></RatedRestrauntCard>
        <RatedRestrauntCard
          rootClassName="rated-restraunt-card-3"
          className="personal-home-component3"
          indexForRestaurant={2}
          reccomendedRestaurants={jsonData}
          isLoadingPage={false}
        ></RatedRestrauntCard>
      </div>
    </div>
  )

  
}

export default PersonalHome