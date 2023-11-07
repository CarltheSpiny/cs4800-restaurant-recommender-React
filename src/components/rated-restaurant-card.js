import React from 'react'

import PropTypes from 'prop-types'

import './rated-restaurant-card.css'

const RatedRestaurantCard = (props) => {
  return (
    <div className="rated-restaurant-card-gallery-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="rated-restaurant-card-image"
      />
      <div className="rated-restaurant-card-container">
        <div className="rated-restaurant-card-container1">
          <div className="rated-restaurant-card-container2">
            <h1 className="rated-restaurant-card-text">{props.heading}</h1>
            <svg viewBox="0 0 1024 1024" className="rated-restaurant-card-icon">
              <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
            </svg>
          </div>
          <span className="rated-restaurant-card-text1">{props.text}</span>
          <span className="rated-restaurant-card-text2">
            {props.dateVisted}
          </span>
        </div>
      </div>
    </div>
  )
}

RatedRestaurantCard.defaultProps = {
  image_alt: 'image',
  dateVisted: '1/1/1990',
  text: 'Not fast food',
  heading: '5',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

RatedRestaurantCard.propTypes = {
  image_alt: PropTypes.string,
  dateVisted: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default RatedRestaurantCard
