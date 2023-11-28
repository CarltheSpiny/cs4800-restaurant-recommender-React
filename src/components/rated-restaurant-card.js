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

const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation';
const cppAddress = '3801 W Temple Ave, Pomona, CA 91768'

const requestBody = {
  "message" : "i want to eat some spicy food",
  "location" : cppAddress,
  "liked_restaurants" : ["E0JNvQbfoGg6d13ADsxdfg"]
}

/*Options to send with headers */
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  header: headers,
  json: requestBody
};

const RatedRestrauntCard = (props) => {
  const [imageSrc, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [rating, setRating] = useState(null);
  const [ data, setPageContent] = useState(null);
  const [ backupEnabled, setBackupMode] = useState(false);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const response = await fetch(apiUrl, requestOptions);
        const jsonData = await response.json();
        console.log('Successful response from fetch: ' + jsonData)
        setPageContent(jsonData);
        var imageURL;
        var restaurantName;
        var averageRating;
        try {
          if (backupEnabled)
            return
          imageURL = await jsonData.restaurants[props.indexForRestaurant].image
          restaurantName = await jsonData.restaurants[props.indexForRestaurant].name
          averageRating = await jsonData.restaurants[props.indexForRestaurant]['average rating']
          //console.log('Successfully set fields')
        } catch (error) {
          console.log('Error in Setting Fields: ' + error)
          setPageContent(RestaurantJson)
          imageURL = await props.restaurantList.restaurants[props.indexForRestaurant].image
          restaurantName = await props.restaurantList.restaurants[props.indexForRestaurant].name
          averageRating = await props.restaurantList.restaurants[props.indexForRestaurant]['average rating']
          console.log('Successfully set backup fields')
        }
        
        setImage(imageURL);
        setName(restaurantName);
        setRating(averageRating);
      } catch (error) {
        console.error('Error getting data: ', error);
        setBackupMode(true)
        setPageContent(RestaurantJson)

        //console.log("Page content to set: " + JSON.stringify(RestaurantJson, null, 2))
        //console.log("Page content: " + data)
        setPageContent(RestaurantJson)
        imageURL = props.restaurantList.restaurants[props.indexForRestaurant].image
        restaurantName = props.restaurantList.restaurants[props.indexForRestaurant].name
        averageRating = props.restaurantList.restaurants[props.indexForRestaurant]['average rating']
        setImage(imageURL);
        setName(restaurantName);
        setRating(averageRating);
        console.log('Successfully set backup fields')
      }
    };    
    fetchAndSetData();
  }, []);

  try {
    return(
      <Link to={{
        pathname: '/restraunt-rating',
        state:  { data: data.restaurants[props.indexForRestaurant]}
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
  } catch (error) {
    console.log(error)
    return(
      <Link to={{
        pathname: '/restraunt-rating',
        state:  { data: props.restaurantList.restaurants[props.indexForRestaurant]}
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
    )
  }
}

RatedRestrauntCard.defaultProps = {
  rootClassName: 'restaurant-card',
  Like_Amount: 'Likes',
  imageSource: 'https://play.teleporthq.io/static/svg/default-img.svg',
  restrauntName: 'Restraunt Name',
  indexForRestaurant: 0,
  restaurantList: RestaurantJson
}

RatedRestrauntCard.propTypes = {
  rootClassName: PropTypes.string,
  Like_Amount: PropTypes.string,
  RestrauntImage_src: PropTypes.string,
  RestrauntName: PropTypes.string,
  indexForRestaurant: PropTypes.number,
  restaurantList: PropTypes.any
}

export default RatedRestrauntCard
