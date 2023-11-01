import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import SearchBar from '../components/search-bar'
import SurveyRestaurantCard from '../components/survey-restaurant-card'
import './survey.css'

const Survey = (props) => {
  return (
    <div className="survey-container">
      <Helmet>
        <title>Survey - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="Survey - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <Title
        text="We still need some more information from you so you can start using the service"
        heading="Registration - Survey"
      ></Title>
      <div className="survey-container1">
        <span className="Heading">
          Please search for at least 5 restaurants that you have visited and
          rate them
        </span>
      </div>
      <SearchBar rootClassName="search-bar-root-class-name1"></SearchBar>
      <div className="survey-gallery">
        <div className="survey-container2">
          <Link to="/rating-from-survey">
            <SurveyRestaurantCard className="survey-component03"></SurveyRestaurantCard>
          </Link>
          <Link to="/rating-from-survey">
            <SurveyRestaurantCard className="survey-component04"></SurveyRestaurantCard>
          </Link>
          <Link to="/rating-from-survey">
            <SurveyRestaurantCard className="survey-component05"></SurveyRestaurantCard>
          </Link>
          <Link to="/rating-from-survey">
            <SurveyRestaurantCard className="survey-component06"></SurveyRestaurantCard>
          </Link>
        </div>
      </div>
      <div className="survey-container3">
        <h1>Restaurants Rated</h1>
      </div>
      <div className="survey-gallery1">
        <div className="survey-container4">
          <SurveyRestaurantCard className="survey-component07"></SurveyRestaurantCard>
          <SurveyRestaurantCard className="survey-component08"></SurveyRestaurantCard>
          <SurveyRestaurantCard className="survey-component09"></SurveyRestaurantCard>
          <SurveyRestaurantCard className="survey-component10"></SurveyRestaurantCard>
        </div>
      </div>
      <div className="survey-container5">
        <form className="survey-form">
          <label className="survey-text2">Restaurants left to go:</label>
          <label className="survey-text3">1</label>
          <Link to="/" className="survey-navlink4 button">
            Finish
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Survey
