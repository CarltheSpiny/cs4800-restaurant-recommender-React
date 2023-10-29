import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './user-login.css'

const UserLogin = (props) => {
  return (
    <div className="user-login-container">
      <Helmet>
        <title>UserLogin - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="UserLogin - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name3"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="user-login-image"
      />
      <div className="user-login-header">
        <h1 className="user-login-title">User Login</h1>
        <span className="user-login-text">
          <span>Hello! Please use your email and password to log in</span>
          <br></br>
        </span>
        <div className="user-login-container1">
          <span className="user-login-text3">
            <span>Don&apos;t have an account?</span>
            <br></br>
          </span>
          <Link to="/registration" className="user-login-navlink">
            Create one.
          </Link>
        </div>
      </div>
      <div className="user-login-container2">
        <form className="user-login-form">
          <div className="user-login-container3">
            <div className="user-login-user-name-field">
              <span id="textLabel" className="user-login-text6">
                Email:
              </span>
              <input
                type="email"
                id="emailIn"
                required
                placeholder="example@email.com"
                className="user-login-textinput input"
              />
            </div>
            <div className="user-login-user-name-field1">
              <span htmlFor="inputIn" className="user-login-text7">
                Password:
              </span>
              <input
                type="password"
                id="inputIn"
                required
                placeholder="Password"
                className="user-login-textinput1 input"
              />
            </div>
            <button type="submit" className="user-login-button button">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
