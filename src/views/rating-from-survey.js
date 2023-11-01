import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import StarRating from '../components/star-rating'
import Label from '../components/label'
import CommentCard from '../components/comment-card'
import './rating-from-survey.css'

const RatingFromSurvey = (props) => {
  return (
    <div className="rating-from-survey-container">
      <Helmet>
        <title>RatingFromSurvey - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RatingFromSurvey - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name7"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="rating-from-survey-image"
      />
      <div className="rating-from-survey-header">
        <h1 className="rating-from-survey-title">Restaurant Name</h1>
        <span className="rating-from-survey-text Content">
          &lt;A small description. Example: Fast food restaurant &gt;
        </span>
      </div>
      <div className="rating-from-survey-container01">
        <div className="rating-from-survey-container02">
          <div className="rating-from-survey-container03">
            <div className="rating-from-survey-container04">
              <div className="rating-from-survey-container05">
                <span className="rating-from-survey-text01 Content">
                  <span>My Rating:</span>
                  <br></br>
                </span>
                <div className="rating-from-survey-container06">
                  <div className="rating-from-survey-container07">
                    <StarRating rootClassName="star-rating-root-class-name1"></StarRating>
                  </div>
                </div>
              </div>
              <div className="rating-from-survey-container08">
                <span className="rating-from-survey-text04 Content">
                  <span>Rating</span>
                  <br></br>
                </span>
                <div className="rating-from-survey-container09">
                  <StarRating rootClassName="star-rating-root-class-name2"></StarRating>
                </div>
              </div>
            </div>
            <div className="rating-from-survey-container10">
              <div className="rating-from-survey-container11">
                <Label
                  mainLabel="Address:"
                  rootClassName="label-root-class-name4"
                ></Label>
                <Label
                  mainLabel="Phone:"
                  rootClassName="label-root-class-name5"
                ></Label>
              </div>
              <div className="rating-from-survey-container12">
                <Label
                  mainLabel="Website:"
                  rootClassName="label-root-class-name6"
                ></Label>
                <Label
                  mainLabel="Cuisine:"
                  rootClassName="label-root-class-name7"
                ></Label>
              </div>
            </div>
            <div className="rating-from-survey-container13">
              <div className="rating-from-survey-container14">
                <div className="rating-from-survey-container15">
                  <span
                    id="fillHeader"
                    className="rating-from-survey-text07 Content"
                  >
                    More Info:
                  </span>
                  <p
                    id="fillList"
                    className="rating-from-survey-text08 Content"
                  >
                    &lt;Description&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="rating-from-survey-form">
            <div className="rating-from-survey-container16">
              <label className="rating-from-survey-text09 Heading">
                Survey Tasks
              </label>
              <Link to="/survey" className="rating-from-survey-navlink button">
                Use for survey
              </Link>
              <div className="rating-from-survey-container17">
                <label className="rating-from-survey-text10">
                  Restaurants left to rate:
                </label>
                <label className="rating-from-survey-text11">5</label>
              </div>
            </div>
          </form>
        </div>
        <div className="rating-from-survey-testimonial">
          <div className="rating-from-survey-container18">
            <h1 className="rating-from-survey-text12">
              <span>Comments</span>
              <br></br>
            </h1>
            <div className="rating-from-survey-container19">
              <CommentCard rootClassName="rootClassName3"></CommentCard>
              <CommentCard
                picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName4"
              ></CommentCard>
              <CommentCard
                picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName5"
              ></CommentCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingFromSurvey
