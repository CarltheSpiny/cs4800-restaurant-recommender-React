import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Label from '../components/label'
import './restraunt-rating.css'

const RestrauntRating = ({location: restaurantData}) => {
  const { state } = restaurantData;
  const [isLiked, setLiked] = useState(false);



  // Add code that pushes something

  const handleLike = (e) => {
    e.preventDefault();
    console.log("Added to Liked")
    setLiked(!isLiked)
  }

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
        src={state.data.image}
        className="restraunt-image"
      />
      <div className="restraunt-rating-header">
        <h1 className="restraunt-rating-title">{state.data.name}</h1>
        
      </div>
      <div className="restraunt-rating-restraunt-info">
        <div className="restraunt-rating-restraunt-details">
          <div className="restraunt-rating-restraunt-contacts">
            <div className="restraunt-rating-row1">
              <Label
                mainLabel="Address:"
                listLabel={state.data.address}
              ></Label>
              <Label
                mainLabel="Hours:"
                listLabel={state.data.hours}
              ></Label>
            </div>
            <div className="restraunt-rating-row2">
              <Label
                mainLabel="Phone:"
              ></Label>
              <Label
                mainLabel="Cuisine:"
                listLabel={state.data.food_type}
              ></Label>
            </div>
            <div className="restraunt-rating-row3">
              <Label
                mainLabel="Website:"
              ></Label>
              <button type="button" className={isLiked ? "restraunt-rating-unlike-button button" : "restraunt-rating-like-button button"} onClick={handleLike}>
                {isLiked ? 'Liked' : 'Like'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrauntRating
