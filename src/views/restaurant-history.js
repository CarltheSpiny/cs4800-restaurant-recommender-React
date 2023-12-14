import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './restaurant-history.css'

const RestaurantHistory = (props) => {
  const [likedListData, setLikedList] = useState(null)

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)

  const [accountData, setAccountData] = useState(null)

  const location = useLocation();

  const [hasReccomendation, setRecFetched] = useState(false)
  const [hasFetched, setFetched] = useState(false)

  const getLikedURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  // Repeatedly Set account Data until its exists
  useEffect(() => {
    setAccountData(location.state && location.state.accountData)
    if (accountData == null || accountData == undefined) {
      console.warn("No one is logged in")
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  }, [])

  useEffect(() =>  {

    if (accountData == null || accountData == undefined){
      console.warn("No account data set; Can't get location until that is set")
      return
    } else {
      console.log("Is logged in!")
      setLoggedIn(true)
    }

    console.info("Getting liked list")
    const getAndSetLikedList = async () => {
      try {
        var optionsForGet = {
          method: 'GET',
          redirect: 'follow',
          header: headers
        }
  
        var userLikedList = [];
        var getAllLikedURL = getLikedURL + `email=` + accountData.email.S
        
        const getLiked = await fetch(getAllLikedURL, optionsForGet)
          .then(response => response.json())
          .then((data) => {
          // console.log("Data" + JSON.stringify(data.restaurants))
          if (JSON.stringify(data.restaurants) == "[]") {
            return
          }
          const jsonData = data
          for (let i = 0; i < Object.keys(jsonData.restaurants).length; i++) {
            userLikedList.push([(jsonData.restaurants[i].S)]);
          }
          setLikedList(userLikedList);
        })
      } catch (error) {
        console.error("Error in getting liked list: " + error)
        setLikedList(userLikedList);
      } finally {
        setLoading(false)
      }
    }
    getAndSetLikedList()
  }, [accountData])

 

  if (isError) {
    return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
      <Title
        text="A list of all the restaurants you have liked."
        heading="Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <span>An error occured getting your liked restaurants</span>
    </div>)
  }

  else if (isLoading) {
    return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
      <Title
        text="A list of all the restaurants you have liked."
        heading="Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <span>Loading...</span>
    </div>)

  } else {
    const cards = []
    try {
      for (let i = 0; i < Object.keys(likedListData).length; i++) {
        var key = `liked-list-card${i}`;
        cards.push(
        <RatedRestrauntCard
          key={key}
          className="liked-rest-card"
          indexForRestaurant={0}
          reccomendedRestaurants={likedListData[i]}
          accountData={accountData}
          isLoadingPage={isLoading}
        />)
        console.info("Sending this data to the card: " + likedListData[i] + "; with index: " + i)
      }
      return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
      <Title
        text="A list of all the restaurants you have liked."
        heading="Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <div className="restaurant-history-gallery">
        {cards}
      </div>
    </div>)
    } catch (error) {
      console.warn("An error occured getting liked list (Maybe list was empty)")
      return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
        <meta
          property="og:title"
          content="RestaurantHistory"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
      <Title
        text="A list of all the restaurants you have liked."
        heading="Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <span>No liked restaurants. When you like a restaurant, it will appear here.</span>
    </div>)
    }
    
  }
}

export default RestaurantHistory
