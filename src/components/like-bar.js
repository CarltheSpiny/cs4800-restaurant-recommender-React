import React from 'react'

import PropTypes from 'prop-types'

import './like-bar.css'

const LikeBar = (props) => {
  return (
    <div className={`like-bar-container ${props.rootClassName} `}>
      <div className="like-bar-container1">
        <button type="button" id="like_button" className="button">
          <span className="">
            <span className="">Like</span>
            <br className=""></br>
          </span>
        </button>
        <button type="button" id="dislike_button" className="button">
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
  rootClassName: '',
  Like_Button: 'Like',
  Dislike_Button: 'Button',
}

LikeBar.propTypes = {
  rootClassName: PropTypes.string,
  Like_Button: PropTypes.string,
  Dislike_Button: PropTypes.string,
}

export default LikeBar
