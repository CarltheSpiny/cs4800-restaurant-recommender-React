import React from 'react'

import PropTypes from 'prop-types'

import './comment-card.css'

const CommentCard = (props) => {
  return (
    <div className={`comment-card-testimonial-card ${props.rootClassName} `}>
      <div className="comment-card-testimonial">
        <span className="comment-card-comment">{props.Comment}</span>
        <span className="">{props.Sentiment}</span>
        <span className="comment-card-author">{props.Author}</span>
      </div>
    </div>
  )
}

CommentCard.defaultProps = {
  Author: 'Jane Doe',
  rootClassName: '',
  Comment:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  Sentiment: 'Like/Dislike',
}

CommentCard.propTypes = {
  Author: PropTypes.string,
  rootClassName: PropTypes.string,
  Comment: PropTypes.string,
  Sentiment: PropTypes.string,
}

export default CommentCard
