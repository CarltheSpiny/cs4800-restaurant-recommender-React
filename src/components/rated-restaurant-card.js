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
  const [hasFetched, setFetched] = useState(false);

  const [imageSrc, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(null);

  const [restData, setRestData] = useState(null);

  const [hasSetFields, setFieldsAsSet] = useState(false)

  var backupJson;

  // fetch with id
  useEffect(() => {
    if (props.isLoadingPage) {
      setLoading(true)
      console.warn("Didn't fetch; Page was still loading")
      return
    }

    if (hasFetched) {
      console.warn("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "Rest from ID has been fetched, no need to do it again")
      return;
    } else {
      console.log("Attempting to fetch Rest Data for the first time")
    }

    // Will fetch a list of reccomended restaurants
    

    if (props.reccomendedRestaurants[props.indexForRestaurant] == null 
      || props.reccomendedRestaurants[props.indexForRestaurant] == undefined) {
        console.warn("No ID was provided!")
        return;
    } else {
      console.info("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "ID was provided")
    }

    const fetchFromId = async() => {     
      console.log("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "Fetching Rest Data from ID")
      const requestBody = {
        "id" : props.reccomendedRestaurants[props.indexForRestaurant]
      }
      
      var request = {
        method: 'POST',
        redirect: 'follow',
        header: headers,
        body: JSON.stringify(requestBody, null, 2)
      }
      try {
        
        const response = await fetch(apiUrl, request)
        const data = await response.json()
        // console.log("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]" + ": JSON response: ", data)
        
        // backupJson = data
        if (response.status != "200") {
          throw Error("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "Server did not respond with a 200 Status")
        }
        setRestData(data)
        setFetched(true)
      } catch (error) {
        console.error("Error: " + error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchFromId()
  }, [isLoading]);

  useEffect(() => {
    if (restData == null || restData == undefined) {
      // console.warn("Rest data was null; Not setting fields")
      return;
    } else {
      console.log("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "Rest Data present")
    }

    const setFields = async() => {
      console.log("RestaurantCard [" + props.reccomendedRestaurants[props.indexForRestaurant] + "]: " + "Setting fields for the Cards")
      var imageURL;
      var restaurantName;
      var averageRating;
      try {
        imageURL = restData.image_url
        restaurantName = restData.name
        averageRating = restData.rating
      } catch (error) {
        console.error("Error in setting fields: " + error)
        console.warn("Using default values!")
        setError(true)
      }
      setImage(imageURL);
      setName(restaurantName);
      setRating(averageRating);
    }
    setFields()
  }, [restData])  

  // console.log("Card Account: " + JSON.stringify(props.accountData));

  if (isError) {
    console.error("Error in fetching!")
    return(
      <Link to={{
        pathname: '/restraunt-rating',
        state:  { accountData: props.accountData, data: restData }
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
  } else {
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
  imageSource: 'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif',
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
