import React from 'react'

import PropTypes from 'prop-types'

import './star-rating.css'

const StarRating = (props) => {
  return (
    <div className={`star-rating-container ${props.rootClassName} `}>
      <div className="star-rating-container1">
        <button type="button" className="star-rating-button button">
          <svg viewBox="0 0 1024 1024" className="star-rating-icon">
            <path
              d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"
              className=""
            ></path>
          </svg>
        </button>
        <button type="button" className="star-rating-button1 button">
          <svg viewBox="0 0 1024 1024" className="star-rating-icon02">
            <path
              d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"
              className=""
            ></path>
          </svg>
        </button>
        <button type="button" className="star-rating-button2 button">
          <svg viewBox="0 0 1024 1024" className="star-rating-icon04">
            <path
              d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"
              className=""
            ></path>
          </svg>
        </button>
        <button type="button" className="star-rating-button3 button">
          <svg viewBox="0 0 1024 1024" className="star-rating-icon06">
            <path
              d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"
              className=""
            ></path>
          </svg>
        </button>
        <button type="button" className="star-rating-button4 button">
          <svg viewBox="0 0 1024 1024" className="star-rating-icon08">
            <path
              d="M512 658l160 96-42-182 142-124-188-16-72-172-72 172-188 16 142 124-42 182zM938 394l-232 202 70 300-264-160-264 160 70-300-232-202 306-26 120-282 120 282z"
              className=""
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

StarRating.defaultProps = {
  rootClassName: '',
}

StarRating.propTypes = {
  rootClassName: PropTypes.string,
}

export default StarRating
