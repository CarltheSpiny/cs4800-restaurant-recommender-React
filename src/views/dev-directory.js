import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './dev-directory.css'
import NavigatorBar from '../components/navigator-bar'
import FetchFromURL from '../components/network/json-fetch'
import FetchAccountInfo from '../components/network/data-fetch'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Title from '../components/title'
import TestJson from '../backup-restaurant-output.json'
const accountURL = 'https://if3mfcuocb.execute-api.us-east-1.amazonaws.com/test'
const restaurantURL = 'https://ovz97nwwca.execute-api.us-east-1.amazonaws.com/GetRestaurantReccomendation'

var requestData = "email=test2@gmail.com";

const Directory = () => {
  return (
    <div className="directory-container">
      <Helmet>
        <title>Directory for Devs</title>
        <meta property="og:title" content="Directory" />
      </Helmet>
      <NavigatorBar></NavigatorBar>
      <Title
      text='Use the links below to get to specific pages'
      heading='Dev Directory'
      ></Title>
      <div className='main-directory-container'>
          <div className='navigated-pages-container-title'>
            <h1>API Tests</h1>
            <span>Reccomender returns different restaurants. The account uses "{requestData}" as the key.</span>
          </div>
        <div className='get-request-heading'>
          <h2>Fetching from Restaurant Recomendation</h2>
          <div className='get-request-text'>
            <FetchFromURL url={restaurantURL} />
          </div>
        </div>
        <div className='get-request-heading2'>
          <h2>Fetching from User Account</h2>
          <div className='get-request-text2'>
            <FetchAccountInfo url={accountURL} request={requestData} />
          </div>
        </div>
        <div className='navigated-pages-container'>
          <div className='navigated-pages-container-title'>
            <h1>Site Pages</h1>
            <span>Pages with data needed from the previous to work, will send a simulated data</span>
          </div>
          <h2>
            <Link to="/">
                PersonalHome
            </Link>
          </h2>
          
          <h2>
            <Link to="/user-information">
                UserInformation
            </Link>
          </h2>

          <h2>
            <Link to="/registration">
                UserRegistration
            </Link>
          </h2>

          <h2>
            <Link to="/restaurant-search">
                RestaurantSearch
            </Link>
          </h2>
          
          <h2>
            <Link to="/user-login">
                UserLogin
            </Link>
          </h2>
          <h2>
            <Link to="/**">
                404NotFound
            </Link>
          </h2>
          <h2>
              <Link to={{
                pathname: '/restraunt-rating',
                state:  { data: TestJson.restaurants[0]}
              }}>
                RestrauntRating
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Directory