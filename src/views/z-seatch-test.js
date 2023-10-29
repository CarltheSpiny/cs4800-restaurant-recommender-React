import React from 'react'

import { Helmet } from 'react-helmet'

import SideMenu from '../components/side-menu'
import './z-seatch-test.css'

const ZSeatchTest = (props) => {
  return (
    <div className="z-seatch-test-container">
      <Helmet>
        <title>zSeatchTest - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="zSeatchTest - cs4800-restaurant-recommender"
        />
      </Helmet>
      <SideMenu rootClassName="side-menu-root-class-name1"></SideMenu>
      <div className="z-seatch-test-container1">
        <h1 className="z-seatch-test-text">Search Restauarnts</h1>
        <div className="z-seatch-test-container2">
          <input type="text" placeholder="placeholder" className="input" />
          <button type="button" className="button">
            Button
          </button>
        </div>
      </div>
      <div className="z-seatch-test-container3">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image01"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image02"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image03"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image04"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image05"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image06"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image07"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image08"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-seatch-test-image09"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          loading="eager"
          className="z-seatch-test-image10"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          loading="eager"
          className="z-seatch-test-image11"
        />
      </div>
    </div>
  )
}

export default ZSeatchTest
