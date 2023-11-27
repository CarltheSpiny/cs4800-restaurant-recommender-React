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
        <div className="title-text-container">
          <h1 className="title-text">{props.heading}</h1>
          <span className="title-text1">{props.text}</span>
          <span className='sub-header-text2'>{props.subtext}</span>
        </div>
      </div>
    </div>
  )
}

Title.defaultProps = {
  text: 'Page description',
  subtext: '',
  image_alt: 'image',
  heading: 'Title',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
}

Title.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Title
