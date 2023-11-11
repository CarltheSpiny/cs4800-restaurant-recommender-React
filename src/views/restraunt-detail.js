import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import LikeBar from '../components/like-bar'
import Label from '../components/label'
import CommentCard from '../components/comment-card'
import './restraunt-detail.css'

const RestrauntDetail = (props) => {
  return (
    <div className="restraunt-detail-container">
      <Helmet>
        <title>RestrauntDetail - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="RestrauntDetail - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name7"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="restraunt-detail-image"
      />
      <div className="restraunt-detail-header">
        <h1 className="restraunt-detail-title">Restaurant Name</h1>
        <span className="restraunt-detail-text Content">
          &lt;A small description. Example: Fast food restaurant &gt;
        </span>
      </div>
      <div className="restraunt-detail-description">
        <div className="restraunt-detail-container01">
          <div className="restraunt-detail-my-rating">
            <div className="restraunt-detail-container02">
              <div className="restraunt-detail-container03">
                <span className="restraunt-detail-text01 Content">
                  <span>My Rating:</span>
                  <br></br>
                </span>
                <div className="restraunt-detail-container04">
                  <div className="restraunt-detail-container05">
                    <LikeBar rootClassName="like-bar-root-class-name1"></LikeBar>
                  </div>
                </div>
              </div>
              <div className="restraunt-detail-global-rating">
                <span className="restraunt-detail-text04 Content">
                  <span>Rating:</span>
                  <br></br>
                </span>
                <div className="restraunt-detail-global-likes">
                  <span className="restraunt-detail-amount">1 M</span>
                  <span className="restraunt-detail-title1">Likes</span>
                </div>
                <div className="restraunt-detail-global-dislikes">
                  <span className="restraunt-detail-amount1">1 M</span>
                  <span className="restraunt-detail-title2">Dislikes</span>
                </div>
              </div>
            </div>
            <div className="restraunt-detail-address-contact">
              <div className="restraunt-detail-container06">
                <Label
                  mainLabel="Address:"
                  rootClassName="label-root-class-name4"
                ></Label>
                <Label
                  mainLabel="Phone:"
                  rootClassName="label-root-class-name5"
                ></Label>
              </div>
              <div className="restraunt-detail-container07">
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
            <div className="restraunt-detail-more-info">
              <div className="restraunt-detail-container08">
                <div className="restraunt-detail-container09">
                  <span
                    id="fillHeader"
                    className="restraunt-detail-text07 Content"
                  >
                    More Info:
                  </span>
                  <p id="fillList" className="restraunt-detail-text08">
                    &lt;Description&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="restraunt-detail-form">
            <div className="restraunt-detail-container10">
              <label className="restraunt-detail-text09 Heading">
                Survey Tasks
              </label>
              <button type="button" className="restraunt-detail-button button">
                Use for survey
              </button>
              <div className="restraunt-detail-container11">
                <label className="restraunt-detail-text10">
                  Restaurants left to rate:
                </label>
                <label className="restraunt-detail-text11">5</label>
              </div>
            </div>
          </form>
        </div>
        <div className="restraunt-detail-testimonial">
          <div className="restraunt-detail-container12">
            <h1 className="restraunt-detail-text12">
              <span>Comments</span>
              <br></br>
            </h1>
            <div className="restraunt-detail-container13">
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

export default RestrauntDetail
