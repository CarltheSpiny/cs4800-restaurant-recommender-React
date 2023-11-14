import React from 'react'

import PropTypes from 'prop-types'

import './likes-display.css'

const LikesDisplay = (props) => {
  return (
    <div className={`likes-display-container ${props.rootClassName} `}>
      <div className="likes-display-sentiments">
        <h4 className="likes-display-title">Likes:</h4>
        <span className="likes-display-amount">{props.amount}</span>
      </div>
    </div>
  )
}

LikesDisplay.defaultProps = {
  title: 'Sentiment:',
  rootClassName: '',
  amount: '1 M',
  rootClassName2: '',
  rootClassName1: '',
}

LikesDisplay.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  amount: PropTypes.string,
  rootClassName2: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default LikesDisplay
