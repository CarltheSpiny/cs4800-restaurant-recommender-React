import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './restaurant-history.css'
import { async } from 'q'

const RestaurantHistory = (props) => {
  const location = useLocation();

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [restData, setData] = useState("")

  const [accountData, setAccountData] = useState(null)

  const [hasFetched, setFetched] = useState(false)

  const restIDURL = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantFromID';
  const getLikedURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'

  /*Headers for CORS */
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  useEffect(() => {
    setAccountData(location.state && location.state.accountData);

    const fetchLiked = async () => {
      if (hasFetched)
        return

      try {
        if (accountData == undefined || accountData == null){
          console.info("Can't check like if no user is logged in!")
          return
        }

        var optionsForGet = {
          method: 'GET',
          redirect: 'follow',
          header: headers
        }

        var getAllLikedURL = getLikedURL + `email=` + accountData.email.S
        const getLiked = await fetch(getAllLikedURL, optionsForGet);
        const jsonData = await getLiked.json();
        var result = []
        console.log("List fetched")

        // Add to rest array
        for (var i in jsonData.restaurants) {
          result.push([(jsonData.restaurants[i].S)])
        }

        setData(result)
        setFetched(true)
        console.info("Rests: " + restData)

      } catch (error) {
        console.error("Error: " + error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchLiked();
  }, [isLoading, restData])

  if (isError) {
    return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
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
      <NavigatorBar rootClassName="navigator-bar-root-class-name2" accountData={ accountData }></NavigatorBar>
      <Title
        text="A list of all the restaurants you have visited or rated."
        heading="Your Restaurant History"
        rootClassName="title-root-class-name4"
      ></Title>
      <span>Loading...</span>
    </div>)

  } else {
    const cards = []
    for (let i = 0; i < Object.keys(restData).length; i++) {
      cards.push(
      <RatedRestrauntCard
        className="liked-rest-card"
        indexForRestaurant={0}
        reccomendedRestaurants={restData[i]}
        accountData={accountData}
        isLoadingPage={isLoading}
      />)
      console.info("Sending this data to the card: " + restData[i] + "; with index: " + i)
    }
    return(<div className="restaurant-history-container">
      <Helmet>
        <title>Restaurant History</title>
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
      <div className="restaurant-history-gallery">
        {cards}
      </div>
    </div>)
  }
}

export default RestaurantHistory
