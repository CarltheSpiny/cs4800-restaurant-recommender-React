import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import opencage from 'opencage-api-client'
import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import './restaurant-search.css'
import RatedRestrauntCard from '../components/rated-restaurant-card'

const RestaurantSearch = (props) => {
  const [serachQuery, setQuery] = useState("Nothing")
  const [hasClickedSearch, setHasClicked] = useState(false)

  const [jsonData, setData] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [hasFetched, setHasFetched] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasLocation, setLocationFetched] = useState(false)

  const [coordinates, setCoordinates] = useState(null);
  const [currentAddress, setAddress] = useState("");


   // <--------------------Access a user's information --------------------->
  const { state } = props.location;
  // Check if AccountData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.accountData;
   // <--------------------Access a user's information --------------------->

  // Geolocation 
  const api_key = '68cf56fa9c6a4506a10ff5550808ded7'
  const api_url = 'https://api.opencagedata.com/geocode/v1/json'

  // Fetch Fields
  const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
  const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'  
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    //'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  useEffect(() => {
    // <-------------- Coordinates and Reverse Geosearch --------------------->
    const getCoords = async () => {
      if (hasLocation) {
        //console.info("User location has been fetched; Not fetching again")
        fetchReccomendation(currentAddress);
        return;
      }

      else if ("geolocation" in navigator) {
          try {
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
        } catch (error) {
          console.error(error)
        } finally {
          setLocationFetched(true)
          setLoading(false)
        }
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

        console.info("Fetching from geolocation api")
        opencage.geocode({ key: api_key, q: geolocation }).then(response => {
            setAddress(response.results[0].formatted)
            setLocationFetched(true)
            fetchReccomendation(response.results[0].formatted);
        }).catch(err => {
            console.error(err);
        })
    }
    // <-------------- End Coordinates and Reverse Geosearch --------------------->

    const fetchReccomendation = async (backAddress) => {
      if (hasFetched) {
        console.warn("Recomendation has been fetched; no need to do it again.")
        return;
      }
  
      const requestBody = {
        "message" : serachQuery,
        "location" : backAddress,
        "liked_restaurants" : []
      }
  
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        header: headers,
        body: JSON.stringify(requestBody, null, 2)
      };
  
      if (String(serachQuery).match("Nothing")) {
        setLoading(false)
        console.warn("Search is empty; Not fetching anything yet.")
        return;
      }
  
      if (hasClickedSearch == false) {
        // console.log("The query was not submitted (Query may exist); We shouldn't fetch")
        return;
      }

      try {
        console.log("Fetching a reccomnedation from search...")
        console.info("This is the body: " + JSON.stringify(requestOptions))
        const response = await fetch(apiUrl, requestOptions)
        const data = await response.json()
        console.log("Restaurant Search: JSON response: ", data)
        setData(data)
        setHasFetched(true)
        setHasClicked(false)
      } catch (error) {
        console.error("Restuarant Search: Error: ", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getCoords();
  }, [shouldRender, hasClickedSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    setHasFetched(false)
    setLoading(true)
    setShouldRender(true)
    setHasClicked(true)
    console.log("Submitted search: " + serachQuery)
  }

  if (isError) {
    console.error("An error occured in rendering")
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search </title>
          <meta
            property="og:title"
            content="RestaurantSearch - cs4800-restaurant-recommender"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ userData }></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>

        <div className={`search-bar-container ${props.rootClassName}`}>
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <label className="search-bar-text">{props.searchLabel}</label>
          <input 
            type="text" 
            placeholder="An Error occured, search is disabled" 
            disabled={true}
            className="search-bar input"
           />
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

  else if (isLoading) {
    console.log("Restaurant Search: Loading")
    return (
      <div className="restaurant-search-container">
        <Helmet>
          <title>Restaurant Search</title>
          <meta
            property="og:title"
            content="Restaurant Search"
          />
        </Helmet>
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ userData }></NavigatorBar>
        <Title
          text="Use the search bar to find a restaurant."
          heading="Search"
          rootClassName="title-root-class-name1"
        ></Title>
        <div className={`search-bar-container ${props.rootClassName} `}>
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <label className="search-bar-text">{props.searchLabel}</label>
          <input 
            type="text" 
            placeholder="Loading..."
            className="search-bar input"
            disabled={true}
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
          <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'></img>
        </div>
      </div>
    )
  }

  else if (shouldRender) {
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
        <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ userData }></NavigatorBar>
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
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={jsonData}
            isLoadingPage={!hasFetched}
            indexForRestaurant={0}
            accountData={ userData }
          ></RatedRestrauntCard>
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={jsonData}
            isLoadingPage={!hasFetched}
            indexForRestaurant={1}
            accountData={ userData }
          ></RatedRestrauntCard>
          <RatedRestrauntCard
            rootClassName="rated-resturant-card-1"
            className="search-card1"
            reccomendedRestaurants={jsonData}
            isLoadingPage={!hasFetched}
            indexForRestaurant={2}
            accountData={ userData }
          ></RatedRestrauntCard>
        </div>
      </div>
    )
  }

  console.log("Page finshed loading (No cards needed)")
  return (
    <div className="restaurant-search-container">
      <Helmet>
        <title>Restaurant Search</title>
        <meta
          property="og:title"
          content="Restaurant Search"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name1" accountData={ userData }></NavigatorBar>
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
