import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Label from '../components/label'
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
        <div className="restraunt-rating-restraunt-header">
          <div className="restraunt-rating-restraunt-name">
            <h1 className="restraunt-rating-text">
              Restraunt Name
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="restraunt-rating-text1">
              &lt;A small description. Example: Fast food restaurant&gt;
            </span>
          </div>
        </div>
        <button type="button" className="restraunt-rating-like-button button">
          Like
        </button>
      </div>
      <div className="restraunt-rating-restraunt-info">
        <div className="restraunt-rating-restraunt-details">
          <div className="restraunt-rating-row1">
            <Label
              mainLabel="Cuisine:"
              rootClassName="label-root-class-name2"
            ></Label>
            <Label
              mainLabel="Website:"
              rootClassName="label-root-class-name3"
            ></Label>
          </div>
          <div className="restraunt-rating-row2">
            <Label
              mainLabel="Address:"
              rootClassName="label-root-class-name"
            ></Label>
            <Label
              mainLabel="Phone:"
              rootClassName="label-root-class-name1"
            ></Label>
          </div>
          <div className="restraunt-rating-row3">
            <div className="restraunt-rating-container1">
              <div className="restraunt-rating-more-info">
                <span
                  id="fillHeader"
                  className="restraunt-rating-title Content"
                >
                  More Info:
                </span>
                <p id="fillList" className="restraunt-rating-content Content">
                  &lt;Description&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrauntRating
