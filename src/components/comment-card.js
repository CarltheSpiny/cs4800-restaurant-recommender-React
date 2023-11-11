import React from 'react'

import PropTypes from 'prop-types'

import SentimentDisplay from './sentiment-display'
import './comment-card.css'

const CommentCard = (props) => {
  return (
    <div className={`comment-card-testimonial-card ${props.rootClassName} `}>
      <div className="comment-card-testimonial">
        <span className="comment-card-comment">{props.Comment}</span>
        <div className="comment-card-container">
          <SentimentDisplay
            title="Likes:"
            rootClassName="sentiment-display-root-class-name"
            className=""
          ></SentimentDisplay>
          <SentimentDisplay
            title="Dislikes:"
            rootClassName="sentiment-display-root-class-name1"
            className=""
          ></SentimentDisplay>
        </div>
        <span className="comment-card-author">{props.Author}</span>
      </div>
    </div>
  )
}

CommentCard.defaultProps = {
  Author: 'Jane Doe',
  rootClassName: '',
  Sentiment: 'Like/Dislike',
  Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
}

CommentCard.propTypes = {
  Author: PropTypes.string,
  rootClassName: PropTypes.string,
  Sentiment: PropTypes.string,
  Comment: PropTypes.string,
}

export default CommentCard
