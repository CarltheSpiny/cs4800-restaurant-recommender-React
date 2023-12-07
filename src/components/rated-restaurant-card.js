import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './rated-restaurant-card.css'
import RestaurantJson from '../backup-restaurant-output.json'

/*Headers for CORS */
const headers = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
});

const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantFromID';

/*Options to send with headers */
const RatedRestrauntCard = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [isRepLoading, setRepLoading] = useState(false);

  const [imageSrc, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(null);
  const [id_data, setIdData] = useState(null);

  const [hasSetFields, setFieldsAsSet] = useState(false)

  var backupJson;

  useEffect(() => {
    if (isRepLoading) {
      console.warn("A card wanted to load again!")
      return;
    }

    // Will fetch a list of reccomended restaurants
    if (props.isLoadingPage) {
      setLoading(true)
      console.warn("Didn't fetch; Page was still loading")
      return
    } else {
      console.log("Restaurant Card: Page Loaded. Attempting to fetch...")
    }

    const requestBody = {
      "id" : props.reccomendedRestaurants[props.indexForRestaurant]
    }
    
    var request = {
      method: 'POST',
      redirect: 'follow',
      header: headers,
      body: JSON.stringify(requestBody, null, 2)
    }

    if (isRepLoading) {
      console.warn("A card wanted to load again!")
      return;
    }
    
    const fetchFromId = async() => {     
      try {
        console.log("ID to fetch: " + props.reccomendedRestaurants[props.indexForRestaurant])
        const response = await fetch(apiUrl, request)
        const data = await response.json()
        console.log("RestaurantCard: JSON response: ", data)
        setIdData(data)
        backupJson = data
        if (response.status != "200")
          setError(true)
        
        setRepLoading(true)
        setFields(data)
      } catch (error) {
        console.error("Error: " + error)
        setError(true)
      } finally {
        setLoading(false)
        
      }
    }

    const setFields = async(jsonData) => {
      console.log("Setting fields...")
      setRepLoading(true)
      setIdData(jsonData)
      setFieldsAsSet(true)
      backupJson = jsonData
      var imageURL;
      var restaurantName;
      var averageRating;
      try {
        imageURL = jsonData.image_url
        restaurantName = jsonData.name
        averageRating = jsonData.rating
        console.log("Set fields from the restaurant response")
      } catch (error) {
        console.error("Error in setting fields: " + error)
        console.warn("Using default values!")
        setError(true)
      }
      setImage(imageURL);
      setName(restaurantName);
      setRating(averageRating);
    }

    fetchFromId()


  }, [props]);

  // console.log("Card Account: " + JSON.stringify(props.accountData));

  if (isError) {
    console.error("Error in fetching!")
    return(
      <Link to={{
        pathname: '/restraunt-rating',
        state:  { accountData: props.accountData, data: id_data }
      }}>
        <div className={`rated-restraunt-card-container ${props.rootClassName} `}>
          <div className="rated-restraunt-card-gallery-card">
            <img
              alt="image"
              src={RestaurantJson.restaurants[0].image}
              className="rated-restraunt-card-restraunt-image"
            />
            <h1 className="rated-restraunt-card-restraunt-name">
              {RestaurantJson.restaurants[0].name} (Error)
            </h1>
            <div className="rated-restraunt-card-ratings">
            <label>
              Rating: {RestaurantJson.restaurants[0]['average rating']} / 5 
            </label>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  else if (isLoading || props.isLoadingPage) {
    // console.log("Loading restaurant card...");
    return (
      <Link to={{
        pathname: '/restraunt-rating',
        state:  { accountData: props.accountData, data: null }
      }}>
        <div className={`rated-restraunt-card-container ${props.rootClassName} `}>
          <div className="rated-restraunt-card-gallery-card">
            <img
              alt="image"
              src={props.imageSource}
              className="rated-restraunt-card-restraunt-image"
            />
            <h1 className="rated-restraunt-card-restraunt-name">
              {props.restrauntName}
            </h1>
            <div className="rated-restraunt-card-ratings">
            <label>
              Rating: {props.restaurantRating} / 5 
            </label>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  else {
    if (props.reccomendedRestaurants[props.indexForRestaurant] == undefined){
      console.error("Card wanted to load again with null data")
      return(
        <p> Whoops!</p>
    )}
    return(
      <Link to={{ 
        pathname: `/restraunt-rating/${props.reccomendedRestaurants[props.indexForRestaurant]}`, 
        state: { accountData: props.accountData} 
      }}>
        <div className={`rated-restraunt-card-container ${props.rootClassName} `}>
          <div className="rated-restraunt-card-gallery-card">
            <img
              alt="image"
              src={imageSrc}
              className="rated-restraunt-card-restraunt-image"
            />
            <h1 className="rated-restraunt-card-restraunt-name">
              {name}
            </h1>
            <div className="rated-restraunt-card-ratings">
            <label>
              Rating: {rating} / 5 
            </label>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  

};

RatedRestrauntCard.defaultProps = {
  rootClassName: 'restaurant-card',
  imageSource: 'https://play.teleporthq.io/static/svg/default-img.svg',
  restrauntName: 'Loading...',
  indexForRestaurant: 0,
  restaurantRating: "--",
  reccomendedRestaurants: RestaurantJson.restaurants[0],
  isLoadingPage: true,
  accountData: null
}

RatedRestrauntCard.propTypes = {
  rootClassName: PropTypes.string,
  imageSource: PropTypes.string,
  restrauntName: PropTypes.string,
  indexForRestaurant: PropTypes.number,
  restaurantRating: PropTypes.any,
  reccomendedRestaurants: PropTypes.any,
  isLoadingPage: PropTypes.bool,
  accountData: PropTypes.object
}

export default RatedRestrauntCard
