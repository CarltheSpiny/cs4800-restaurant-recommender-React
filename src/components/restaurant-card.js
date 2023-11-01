import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './restaurant-card.css'

const RestaurantCard = (props) => {
  return (
    <Link to="/rating" className="">
      <div className={`restaurant-card-gallery-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="restaurant-card-image"
        />
        <div className="restaurant-card-container">
          <div className="restaurant-card-container1">
            <div className="restaurant-card-container2">
              <h1 className="restaurant-card-text">{props.rating}</h1>
              <svg viewBox="0 0 1024 1024" className="restaurant-card-icon">
                <path
                  d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"
                  className=""
                ></path>
              </svg>
            </div>
            <span className="restaurant-card-text1">{props.cusineType}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

RestaurantCard.defaultProps = {
  cusineType: 'Not fast food',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rating: '5',
  rootClassName: '',
}

RestaurantCard.propTypes = {
  cusineType: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rating: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RestaurantCard
