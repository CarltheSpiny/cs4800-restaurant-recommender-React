import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import StarRating from '../components/star-rating'
import Label from '../components/label'
import CommentCard from '../components/comment-card'
import './rating.css'

const Rating = (props) => {
  return (
    <div className="rating-container">
      <Helmet>
        <title>Rating - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="Rating - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="rating-image"
      />
      <div className="rating-header">
        <h1 className="rating-title">Restaurant Name</h1>
        <span className="rating-text Content">
          &lt;A small description. Example: Fast food restaurant &gt;
        </span>
      </div>
      <div className="rating-container01">
        <div className="rating-container02">
          <div className="rating-container03">
            <div className="rating-container04">
              <div className="rating-container05">
                <span className="rating-text01 Content">
                  <span>My Rating:</span>
                  <br></br>
                </span>
                <div className="rating-container06">
                  <StarRating rootClassName="star-rating-root-class-name3"></StarRating>
                </div>
              </div>
              <div className="rating-container07">
                <span className="rating-text04 Content">
                  <span>Rating</span>
                  <br></br>
                </span>
                <div className="rating-container08">
                  <StarRating rootClassName="star-rating-root-class-name4"></StarRating>
                </div>
              </div>
            </div>
            <div className="rating-container09">
              <div className="rating-container10">
                <Label
                  mainLabel="Address:"
                  rootClassName="label-root-class-name"
                ></Label>
                <Label
                  mainLabel="Phone:"
                  rootClassName="label-root-class-name1"
                ></Label>
              </div>
              <div className="rating-container11">
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
            <div className="rating-container12">
              <div className="rating-container13">
                <div className="rating-container14">
                  <span id="fillHeader" className="rating-text07 Content">
                    More Info:
                  </span>
                  <p id="fillList" className="rating-text08 Content">
                    &lt;Description&gt;
                  </p>
                </div>
              </div>
              <div className="rating-container15"></div>
            </div>
          </div>
          <div className="rating-testimonial">
            <div className="rating-container16">
              <h1 className="rating-text09">
                <span>Comments</span>
                <br></br>
              </h1>
              <div className="rating-container17">
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

export default Rating
