import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import LikeBar from '../components/like-bar'
import Label from '../components/label'
import CommentCard from '../components/comment-card'
import './restraunt-rating.css'

const RestrauntRating = (props) => {
  return (
    <div className="restraunt-rating-container">
      <Helmet>
        <title>RestrauntRating - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RestrauntRating - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="restraunt-rating-image"
      />
      <div className="restraunt-rating-header">
        <h1 className="restraunt-rating-title">Restaurant Name</h1>
        <span className="restraunt-rating-text Content">
          &lt;A small description. Example: Fast food restaurant &gt;
        </span>
      </div>
      <div className="restraunt-rating-restraunt-info">
        <div className="restraunt-rating-restraunt-details">
          <div className="restraunt-rating-sentiment-rating">
            <div className="restraunt-rating-personal-rating">
              <span className="restraunt-rating-text01 Content">
                <span>My Sentiment:</span>
                <br></br>
              </span>
              <div className="restraunt-rating-container01">
                <LikeBar rootClassName="like-bar-root-class-name3"></LikeBar>
              </div>
            </div>
            <div className="restraunt-rating-global-rating">
              <span className="restraunt-rating-text04 Content">
                <span>Sentiment:</span>
                <br></br>
              </span>
              <div className="restraunt-rating-container02">
                <div className="restraunt-rating-container03">
                  <div className="restraunt-rating-container04">
                    <button type="button" id="like_button" className="button">
                      <span>
                        <span>Like</span>
                        <br></br>
                      </span>
                    </button>
                    <button
                      type="button"
                      id="dislike_button"
                      className="button"
                    >
                      <span>
                        <span>Dislike</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="restraunt-rating-restraunt-contacts">
            <div className="restraunt-rating-container05">
              <Label
                mainLabel="Address:"
                rootClassName="label-root-class-name"
              ></Label>
              <Label
                mainLabel="Phone:"
                rootClassName="label-root-class-name1"
              ></Label>
            </div>
            <div className="restraunt-rating-container06">
              <Label
                mainLabel="Website:"
                rootClassName="label-root-class-name3"
              ></Label>
              <Label
                mainLabel="Cuisine:"
                rootClassName="label-root-class-name2"
              ></Label>
            </div>
          </div>
          <div className="restraunt-rating-restraunt-description">
            <div className="restraunt-rating-container07">
              <span id="fillHeader" className="restraunt-rating-text13 Content">
                More Info:
              </span>
              <p id="fillList" className="restraunt-rating-text14 Content">
                &lt;Description&gt;
              </p>
            </div>
            <div className="restraunt-rating-container08"></div>
          </div>
        </div>
        <div className="restraunt-rating-comments">
          <div className="restraunt-rating-testimonial">
            <div className="restraunt-rating-container09">
              <h1 className="restraunt-rating-text15">
                <span>Comments</span>
                <br></br>
              </h1>
              <div className="restraunt-rating-container10">
                <CommentCard rootClassName="rootClassName"></CommentCard>
                <CommentCard
                  picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName2"
                ></CommentCard>
                <CommentCard
                  picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                ></CommentCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrauntRating
