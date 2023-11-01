import React from 'react'

import PropTypes from 'prop-types'

import './title.css'

const Title = (props) => {
  return (
    <div className={`title-container ${props.rootClassName} `}>
      <div className="title-header">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="title-image"
        />
        <h1 className="">{props.heading}</h1>
        <span className="">{props.text}</span>
      </div>
    </div>
  )
}

Title.defaultProps = {
  text: 'Page description',
  image_alt: 'image',
  heading: 'Title',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

Title.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Title
