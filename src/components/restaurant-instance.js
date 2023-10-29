import React from 'react'

import PropTypes from 'prop-types'

import './restaurant-instance.css'

const RestaurantInstance = (props) => {
  return (
    <div className={`restaurant-instance-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="restaurant-instance-image"
      />
      <div className="restaurant-instance-container1">
        <h1 className="restaurant-instance-text">{props.restHeading}</h1>
        <span className="restaurant-instance-text1">{props.restDesc}</span>
      </div>
    </div>
  )
}

RestaurantInstance.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  restHeading: 'Restaurant Name',
  image_alt: 'image',
  rootClassName: '',
  restDesc: 'A restaurant description',
}

RestaurantInstance.propTypes = {
  image_src: PropTypes.string,
  restHeading: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  restDesc: PropTypes.string,
}

export default RestaurantInstance
