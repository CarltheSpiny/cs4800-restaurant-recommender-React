import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import './landing-page.css'
import NavigatorBar from '../components/navigator-bar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const url = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/HelloWorld'


const Landing = (props) => {
  const [response, setResponse] = useState('hello world response');

  const fetchDummy = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'HelloWorld',
        }
      });
      setResponse(data.response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="page-container">
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <div className="page-container1">
        <h1>Directory</h1>
        <span>Use the links below to get to any page</span>
        <button className='button' onClick={fetchDummy}>
          getRequest
        </button>
      </div>
      <div>
        <h1>
        <Link to="/">
            PersonalHome
        </Link>
        </h1>
        <h1>
        <Link to="/survey">
            Survey
        </Link>
        </h1>
        <h1>
        <Link to="/user-information">
            UserInformation
        </Link>
        </h1>
        <h1>
        <Link to="/registration">
            UserRegistration
        </Link>
        </h1>
        <h1>
        <Link to="/restaurant-search">
            RestaurantSearch
        </Link>
        </h1>
        <h1>
        <Link to="/user-login">
            UserLogin
        </Link>
        </h1>
        <h1>
        <Link to="/rating-from-survey">
            RatingFromSurvey
        </Link>
        </h1>
        <h1>
        <Link to="/**">
            404NotFound
        </Link>
        </h1>
        <h1>
        <Link to="/restraunt-rating">
            RestrauntRating
        </Link>
        </h1>
        c

        <h1>
        <Link to="/history-test">
            TestHistory
        </Link>
        </h1>
      </div>
    </div>
  );
}

export default Landing
