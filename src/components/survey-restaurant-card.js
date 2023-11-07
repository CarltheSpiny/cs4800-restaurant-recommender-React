import React from 'react'

import PropTypes from 'prop-types'

import './survey-restaurant-card.css'

const SurveyRestaurantCard = (props) => {
  return (
    <div className="survey-restaurant-card-gallery-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="survey-restaurant-card-image"
      />
      <div className="survey-restaurant-card-container">
        <div className="survey-restaurant-card-container1">
          <div className="survey-restaurant-card-container2">
            <h1 className="survey-restaurant-card-text">{props.heading}</h1>
            <svg
              viewBox="0 0 1024 1024"
              className="survey-restaurant-card-icon"
            >
              <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
            </svg>
          </div>
          <span className="survey-restaurant-card-text1">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

SurveyRestaurantCard.defaultProps = {
  text: 'Not fast food',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  heading: '5',
}

SurveyRestaurantCard.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default SurveyRestaurantCard
