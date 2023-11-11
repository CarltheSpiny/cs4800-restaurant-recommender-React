import React from 'react'

import PropTypes from 'prop-types'

import './like-bar.css'

const LikeBar = (props) => {
  return (
    <div className={`like-bar-container ${props.rootClassName} `}>
      <div className="like-bar-container1">
        <button
          id="like_button"
          type="button"
          className="button like-bar-like-button"
        >
          <span className="">
            <span className="">Like</span>
            <br className=""></br>
          </span>
        </button>
        <button
          id="dislike_button"
          type="button"
          className="button like-bar-dislike-button"
        >
          <span className="">
            <span className="">Dislike</span>
            <br className=""></br>
          </span>
        </button>
      </div>
    </div>
  )
}

LikeBar.defaultProps = {
  Dislike_Button: 'Button',
  Like_Button: 'Like',
  rootClassName: '',
}

LikeBar.propTypes = {
  Dislike_Button: PropTypes.string,
  Like_Button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LikeBar
