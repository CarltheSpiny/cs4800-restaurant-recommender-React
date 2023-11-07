import React from 'react'

import PropTypes from 'prop-types'

import StarRating from './star-rating'
import './comment-card.css'

const CommentCard = (props) => {
  return (
    <div className={`comment-card-testimonial-card ${props.rootClassName} `}>
      <StarRating
        rootClassName="star-rating-root-class-name"
        className=""
      ></StarRating>
      <div className="comment-card-testimonial">
        <span className="comment-card-text">{props.quote}</span>
        <span className="comment-card-text1">{props.name}</span>
      </div>
    </div>
  )
}

CommentCard.defaultProps = {
  name: 'Jane Doe',
  rootClassName: '',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
}

CommentCard.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
}

export default CommentCard
