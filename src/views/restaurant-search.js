import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import opencage from 'opencage-api-client'
import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import './restaurant-search.css'
import RatedRestrauntCard from '../components/rated-restaurant-card'

const RestaurantSearch = (props) => {
  const [restData, setRestData] = useState(null);

  const [coordinates, setCoordinates] = useState(null);
  const [currentAddress, setAddress] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false)

  const [hasReccomendation, setRecFetched] = useState(false)
  const [likedList, setLikedList] = useState(null);
  const [accountData, setAccountData] = useState(null);

  // <--------------------Access a user's information --------------------->

  const location = useLocation()
   // <--------------------Access a user's information --------------------->

  const [searchQuery, setQuery] = useState("Nothing")
  const [hasClickedSearch, setHasClicked] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasLocation, setLocationFetched] = useState(false)

  // Geolocation 
  const api_key = '68cf56fa9c6a4506a10ff5550808ded7'
  //const api_url = 'https://api.opencagedata.com/geocode/v1/json'

  // Liked List
  const getLikedURL = 'https://bn8qlgorkl.execute-api.us-east-1.amazonaws.com/Testing/Account/Restaurant?'

  // Restaurant Reccomendation
  const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
  const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'  

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    //'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
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

  // Coordinates, Reverse Geosearch, and Getting liked list; Will ensure that accountData exisits before anything else happens
  useEffect(() => {
    
    if (accountData == null || accountData == undefined){
      console.warn("No account data set; Can't get location until that is set")
      return
    } else {
      console.log("Is logged in!")
      setLoggedIn(true)
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
              userLikedList.push([(jsonData.restaurants[i].S)] + '');
            }
        });

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
  }, [currentAddress])

  // Get Recomendation when clicked changes
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
  
      if (hasClickedSearch == false) {
        console.log("The query was not submitted (Query may exist); We shouldn't fetch")
        return;
      }
        
      const requestBody = {
        "message" : searchQuery,
        "location" : currentAddress,
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
        setHasClicked(false)
      }
    }
    fetchReccomendation()
  }, [hasClickedSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecFetched(false)
    setHasClicked(true)
    console.log("Submitted search: " + searchQuery)
  }

  if (isError) {
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search </title>
          <meta
            property="og:title"
            content="RestaurantSearch - cs4800-restaurant-recommender"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>
        <div className="restaurant-search-gallery">
          <h2>An error occured while getting the results of your search.</h2>
        </div>
      </div>
    )
  }

  if (isLoading && isLoggedIn) {
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search</title>
          <meta
            property="og:title"
            content="Restaurant Search"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>
        <div>
          {currentAddress && <p className='location-header'>Current Address: {currentAddress}</p>}
        </div>
        <div className={`search-bar-container ${props.rootClassName} `}>
        <form className="search-bar-form">
          <label className="search-bar-text">{props.searchLabel}</label>
          <input 
            type="text"
            placeholder={searchQuery}
            className="search-bar input"
            disabled={true} />
          <button type='submit'>
            <svg viewBox="0 0 1024 1024" className="search-bar-icon">
              <path
                d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"
                className=""
              ></path>
            </svg>
          </button>
        </form>
      </div>
        <div className="loading-container">
          <img className='loading-gif' src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'></img>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search </title>
          <meta
            property="og:title"
            content="RestaurantSearch - cs4800-restaurant-recommender"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>
         <h2 className="restraunt-search-title">
          You need to be logged in to search restaurants
        </h2>
        <div className="restraunt-search-header">
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


  else if (hasReccomendation) {
    console.log("Card should render (Searched submitted)")
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search</title>
          <meta
            property="og:title"
            content="RestaurantSearch - cs4800-restaurant-recommender"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>
        <div>
          {currentAddress && <p className='location-header'>Current Address: {currentAddress}</p>}
        </div>
        <div className={`search-bar-container ${props.rootClassName} `}>
          <form className="search-bar-form" onSubmit={handleSubmit}>
            <label className="search-bar-text">{props.searchLabel}</label>
            <input 
              type="text" 
              placeholder={searchQuery} 
              className="search-bar input"
              onChange={ (e) => setQuery(e.target.value) } />
            <button type='submit'>
              <svg viewBox="0 0 1024 1024" className="search-bar-icon">
                <path
                  d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"
                  className=""
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="restaurant-search-gallery">
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={restData}
            isLoadingPage={!hasReccomendation}
            indexForRestaurant={0}
            accountData={ userData }
          ></RatedRestrauntCard>
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={restData}
            isLoadingPage={!hasReccomendation}
            indexForRestaurant={1}
            accountData={ userData }
          ></RatedRestrauntCard>
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={restData}
            isLoadingPage={!hasReccomendation}
            indexForRestaurant={2}
            accountData={ userData }
          ></RatedRestrauntCard>
        </div>
      </div>
    )
  }

  return (
    <div className="restaurant-search-container">
      <Helmet>
        <title>Restaurant Search</title>
        <meta
          property="og:title"
          content="Restaurant Search"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ accountData }isLoading={isLoading}></NavigatorBar>
      <Title
        text="Use the search bar to find a restaurant."
        heading="Search"
        rootClassName="title-root-class-name1"
      ></Title>
      <div className='location-header'>
          {currentAddress && <h3>Current Address: {currentAddress}</h3>}
        </div>
      <div className={`search-bar-container ${props.rootClassName} `}>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <label className="search-bar-text">{props.searchLabel}</label>
        <input 
          type="text" 
          placeholder={props.searchInput}
          className="search-bar input"
          onChange={ (e) => setQuery(e.target.value) } />
        <button type='submit'>
          <svg viewBox="0 0 1024 1024" className="search-bar-icon">
            <path
              d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"
              className=""
            ></path>
          </svg>
        </button>
      </form>
    </div>
      <div className="restaurant-search-gallery">
        <div className="restaurant-search-container1"></div>
      </div>
    </div>
  )
}

RestaurantSearch.defaultProps = {
  searchInput: 'Search....',
  searchLabel: 'Search:',
  rootClassName: '',
}

RestaurantSearch.propTypes = {
  searchInput: PropTypes.string,
  searchLabel: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RestaurantSearch
