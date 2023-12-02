import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import LinkLabel from '../components/href-label'
import NavigatorBar from '../components/navigator-bar'
import Label from '../components/label'
import './restraunt-rating.css'
import RestaurantFromID from '../components/restaurant-from-id-output.json'

/*Headers for CORS */
const headers = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
});

const apiUrl = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantFromID';

const RestrauntRating = (props) => {
  let { id } = useParams();

  console.log("Params: " + id)
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [jsonData, setData] = useState("");

  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    const fetchWithId = async () => {
      try {
        if ((id != null) || (id != undefined)) {
          console.log("ID to fetch: " + id)
          const requestBody = {
            "id" : id
          }
          
          var request = {
            method: 'POST',
            redirect: 'follow',
            header: headers,
            body: JSON.stringify(requestBody, null, 2)
          }

          const response = await fetch(apiUrl, request)
          const data = await response.json()
          console.log("Rating Response: ", data)
          setData(data)
          if (response.status != "200")
            setError(true)
        } else {
          console.error("No ID was passed...")
          setData(RestaurantFromID)
          return;
        }
      } catch (error) {
        console.error("An error occured: " + error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchWithId()
  }, [])

  // Add code that pushes something
  function handleText(jsonText) {
    var text = String(jsonText)
      text.replace(/["{}]/g, '');
      console.log(text)
    return text;
  }

  const handleLike = (e) => {
    e.preventDefault();
    console.log("Added to Liked")
    setLiked(!isLiked)
  }

  if (isError) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar></NavigatorBar>
        <img
          alt="image"
          src={props.imageSource}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            Error getting Name!
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel="--/--"
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Website:"
                  listLabel="???"
                ></Label>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cuisine:"
                  listLabel="???"
                ></Label>
                <Label
                  mainLabel="Price Range:"
                  listLabel="???"
                ></Label>
              </div>
              <button type="button" className={isLiked ? "restraunt-rating-unlike-button button" : "restraunt-rating-like-button button"} onClick={handleLike}>
                  {isLiked ? 'Liked' : 'Like'}
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else if (isLoading) {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar></NavigatorBar>
        <img
          alt="image"
          src={props.imageSource}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            Loading...
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel="Loading..."
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Website:"
                  listLabel="Loading..."
                ></Label>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cuisine:"
                  listLabel="Loading..."
                ></Label>
                <Label
                  mainLabel="Price Range:"
                  listLabel="Loading"
                ></Label>
              </div>
              <button 
                type="button" 
                className={"restraunt-rating-like-button button"}>
                  Like
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="restraunt-rating-page">
        <Helmet>
          <title>RestrauntRating - cs4800-restaurant-recommender</title>
          <meta
            property="og:title"
            content="RestrauntRating"
          />
        </Helmet>
        <NavigatorBar></NavigatorBar>
        <img
          alt="image"
          src={jsonData.image_url}
          className="restraunt-image"
        />
        <div className="restraunt-rating-header">
          <h1 className="restraunt-rating-title">
            {jsonData.name}
          </h1>
        </div>
        <div className="restraunt-rating-restraunt-info">
          <div className="restraunt-rating-restraunt-details">
            <div className="restraunt-rating-restraunt-contacts">
              <div className="restraunt-rating-row1">
                <Label
                  mainLabel="Address:"
                  listLabel={jsonData.location}
                ></Label>
                <Label
                  mainLabel="Rating:"
                  listLabel={jsonData.rating + "/ 5"}
                ></Label>
              </div>
              <div className="restraunt-rating-row2">
                <Label
                  mainLabel="Phone:"
                  listLabel={jsonData.phone}
                ></Label>
                <LinkLabel
                  mainLabel="Website: "
                  href_label={jsonData.url}
                ></LinkLabel>
              </div>
              <div className="restraunt-rating-row3">
                <Label
                  mainLabel="Cusisne:"
                  listLabel={handleText(jsonData.restaurant_types)}
                ></Label>
                <Label
                  mainLabel="Price: "
                  listLabel={jsonData.price}
                ></Label>
              </div>
            </div>
          </div>
          <button type="button" className={isLiked ? "restraunt-rating-unlike-button button" : "restraunt-rating-like-button button"} onClick={handleLike}>
                  {isLiked ? 'Liked' : 'Like'}
                </button>
        </div>
      </div>
    )
  }

  
}

RestrauntRating.defaultProps = {
  imageSource: 'https://play.teleporthq.io/static/svg/default-img.svg',
  restrauntName: 'Loading...',
  restaurantRating: "--"
}

RestrauntRating.propTypes = {
  imageSource: PropTypes.string,
  restrauntName: PropTypes.string,
  restaurantRating: PropTypes.any
}

export default RestrauntRating
