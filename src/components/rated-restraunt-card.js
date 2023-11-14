import React from 'react'

import PropTypes from 'prop-types'

import LikesDisplay from './likes-display'
import './rated-restraunt-card.css'

const RatedRestrauntCard = (props) => {
  return (
    <div className={`rated-restraunt-card-container ${props.rootClassName} `}>
      <div className="rated-restraunt-card-gallery-card">
        <img
          alt="image"
          src={props.RestrauntImage_src}
          className="rated-restraunt-card-restraunt-image"
        />
        <h2 className="rated-restraunt-card-restraunt-name">
          {props.RestrauntName}
        </h2>
        <div className="rated-restraunt-card-ratings">
          <LikesDisplay
            title="Likes:"
            rootClassName="likes-display-root-class-name2"
            className=""
          ></LikesDisplay>
        </div>
      </div>
    </div>
  )
}

RatedRestrauntCard.defaultProps = {
  rootClassName: '',
  Like_Amount: 'Likes',
  RestrauntImage_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  RestrauntName: 'Restraunt Name',
}

RatedRestrauntCard.propTypes = {
  rootClassName: PropTypes.string,
  Like_Amount: PropTypes.string,
  RestrauntImage_src: PropTypes.string,
  RestrauntName: PropTypes.string,
}

export default RatedRestrauntCard
