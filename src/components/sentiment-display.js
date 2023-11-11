import React from 'react'

import PropTypes from 'prop-types'

import './sentiment-display.css'

const SentimentDisplay = (props) => {
  return (
    <div className={`sentiment-display-container ${props.rootClassName} `}>
      <div className="sentiment-display-sentiments">
        <h4 className="sentiment-display-title">{props.title}</h4>
        <span className="sentiment-display-amount">{props.amount}</span>
      </div>
    </div>
  )
}

SentimentDisplay.defaultProps = {
  title: 'Sentiment:',
  rootClassName: '',
  amount: '1 M',
  rootClassName2: '',
  rootClassName1: '',
}

SentimentDisplay.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  amount: PropTypes.string,
  rootClassName2: PropTypes.string,
  rootClassName1: PropTypes.string,
}

export default SentimentDisplay
