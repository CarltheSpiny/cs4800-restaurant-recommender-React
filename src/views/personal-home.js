import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import opencage from 'opencage-api-client'
import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import RatedRestrauntCard from '../components/rated-restaurant-card'
import './personal-home.css'

const PersonalHome = (props) => {
  const [restData, setRestData] = useState(null);

  const [coordinates, setCoordinates] = useState(null);
  const [currentAddress, setAddress] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [hasReccomendation, setRecFetched] = useState(false);
  const [likedList, setLikedList] = useState(null);
  const [accountData, setAccountData] = useState(null);

  // <--------------------Access a user's information --------------------->
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const location = useLocation()
  // <--------------------Access a user's information --------------------->

  // Geolocation 
  const api_key = '68cf56fa9c6a4506a10ff5550808ded7'
  const api_url = 'https://api.opencagedata.com/geocode/v1/json'
  
  // Restaurant Recomendation
  const getLikedURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'
  
  const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
  const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  // Repeatedly Set account Data until its exists
  useEffect(() => {
    setAccountData(location.state && location.state.accountData)
    if (accountData == null || accountData == undefined){
      console.warn("No one is logged in")
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
  })

  // Coordinates, Reverse Geosearch, and Getting liked list; Will ensure that accountData exisits before anything else happens
  useEffect(() => {
    
    if (accountData == null || accountData == undefined){
      console.warn("No account data set; Can't get location until that is set")
      return
    } else {
      console.log("Is logged in!")
    }
   console.info("Getting coordinates from location")
    const getCoords = async () => {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
              const { latitude, longitude} = position.coords;
              var currentPos = latitude + ',' + longitude
              setCoordinates(String(currentPos))
              }
          )
      }
    }
    getCoords()
 }, [accountData])

 // Get Address when coordinates are changed
  useEffect(() => {
    
    if (coordinates == null || coordinates == undefined) {
      console.warn("Coordinates are not set; Can't get Address yet")
      return
    }
    console.info("Getting Address from Coordinates")
    const getAddress = async () => {
      var stringIsInvalid = coordinates === undefined ||
        typeof coordinates !== 'string' || 
        coordinates.length < 1;

        if(stringIsInvalid) {
            console.error("URI component would be undefined, aborting fetch")
            console.warn("Errorneus String: " + coordinates)
            return;
        };

        opencage.geocode({ key: api_key, q: coordinates }).then(response => {
            setAddress(response.results[0].formatted)
        }).catch(err => {
            console.error("Error in getting address from coordinates (openCage API): " + err);
        })
    }
    getAddress();
  }, [coordinates])

  // Get liked list when address changes
  useEffect(() =>  {
    if (currentAddress == null || currentAddress == undefined) {
      console.warn("Address not set; Can't get liked list")
      return
    }
    console.info("Getting liked list from address")
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
            console.warn("No liked rests found for user")
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
      }
    }
    getAndSetLikedList()
  }, [currentAddress])

  // Get Recomendation when likedList is set
  useEffect(() => {
    if (likedList == null || likedList == undefined) {
      console.warn("Liked List not set; Can't get a proper reccomendation")
      return;
    }

    if (hasReccomendation == true) {
      console.warn("Reccomendation has been fetched; No need to get new one")
      return;
    }

    console.info("Getting reccomendation")
    const fetchReccomendation = async () => {
        
      const requestBody = {
        "message" : "",
        "location" : currentAddress,
        "liked_restaurants" : likedList
      }
  
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        header: headers,
        body: JSON.stringify(requestBody, null, 2)
      };

      try {
        const response = await fetch(apiUrl, requestOptions)

        if (response.status == '500') {
          throw Error("Status 500! Maybe too many API calls caused server to stop sending data?")
        }

        const data = await response.json()
        console.log("Personal Home: JSON response: ", data)
        setRestData(data)
      } catch (error) {
        console.error("Error in getting Rest Reccomendation: " + error)
        setError(true);
      } finally {
        setLoading(false)
        setRecFetched(true)
      }
    }
    fetchReccomendation()
  }, [likedList])

  

 if (isError) {
  return(
    <div className="personal-home-container">
        <Helmet>
          <title>cs4800-restaurant-recommender</title>
          <meta property="og:title" content="cs4800-restaurant-recommender" />
        </Helmet>
        <NavigatorBar accountData={ accountData } isLoading={isLoading} ></NavigatorBar>
        <Title
          text="Your personalized feed of restaurants we think you'll love!"
          heading="Your Feed"
          rootClassName="title-root-class-name"
        ></Title>
        
        <div className="personal-home-gallery">
        <h2>An error occured while getting your feed.</h2>
        </div>
      </div>
  )
 }

 // if we are still loading ad we are logged in
  if (isLoading && isLoggedIn) {
    return (
      <div className="personal-home-container">
        <Helmet>
          <title>cs4800-restaurant-recommender</title>
          <meta property="og:title" content="cs4800-restaurant-recommender" />
        </Helmet>
        <NavigatorBar accountData={ accountData } isLoading={isLoading} ></NavigatorBar>
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

  // if we aren't logged in
  if (!isLoggedIn) {
    return (
      <div className="personal-home-container">
        <Helmet>
          <title>cs4800-restaurant-recommender</title>
          <meta property="og:title" content="cs4800-restaurant-recommender" />
        </Helmet>
        <NavigatorBar accountData={ accountData } isLoading={isLoading} ></NavigatorBar>
        <Title
          text="Your personalized feed of restaurants we think you'll love!"
          heading="Your Feed"
          rootClassName
          ="title-root-class-name"
        ></Title>
        <h2 className="restraunt-rating-title">
          You need to be logged in to view restaurants
        </h2>
        <div className="restraunt-rating-header">
        <span className="registration-text12">
            <span>Already have an account?</span>
          </span>
          <Link to="/user-login" className="registration-navlink">
              Sign in here.
          </Link>
        </div>
        <div className="registration-to-login-container">
          <span className="user-login-text5">
            <span>Don&apos;t have an account?</span>
          </span>
          <Link to="/registration" className="user-login-navlink">
            Create one.
          </Link>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="personal-home-container">
        <Helmet>
          <title>Home</title>
          <meta property="og:title" content="cs4800-restaurant-recommender" />
        </Helmet>
        <NavigatorBar accountData={ accountData } isLoading={isLoading} ></NavigatorBar>
        <Title
          text="Your personalized feed of restaurants we think you'll love!"
          heading="Your Feed"
          rootClassName="title-root-class-name"
        ></Title>
        <div>
          {currentAddress && <p className='address-text'>Current Address: {currentAddress}</p>}
        </div>
        <div className="personal-home-gallery">
          
          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={0}
            reccomendedRestaurants={restData}
            isLoadingPage={isLoading}
            accountData={ accountData }
          ></RatedRestrauntCard>

          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={1}
            reccomendedRestaurants={restData}
            isLoadingPage={isLoading}
            accountData={ accountData }
          ></RatedRestrauntCard>

          <RatedRestrauntCard
            rootClassName="rated-restraunt-card-1"
            className="personal-home-component1"
            indexForRestaurant={2}
            reccomendedRestaurants={restData}
            isLoadingPage={isLoading}
            accountData={ accountData }
          ></RatedRestrauntCard>
          
        </div>
      </div>
    )
  }

  
}

export default PersonalHome