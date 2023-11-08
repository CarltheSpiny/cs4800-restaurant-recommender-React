import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './registration.css'

const Registration = (props) => {
  return (
    <div className="registration-container">
      <Helmet>
        <title>Registration - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="Registration - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name6"></NavigatorBar>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="registration-image"
      />
      <div className="registration-header">
        <h1 className="registration-title">User Registration</h1>
        <span className="registration-text">
          <span>
            Fill the fields out bellow to create an account!
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
        <div className="registration-container1">
          <span className="registration-text03">
            <span>Already have an account?</span>
            <br></br>
          </span>
          <Link to="/user-login" className="registration-navlink">
            <span>
              Sign in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>here.</span>
          </Link>
        </div>
      </div>
      <div className="registration-registration-container">
        <form className="registration-registration-form">
          <div className="registration-all-fields">
            <div className="registration-user-fields">
              <div className="registration-first-name">
                <span htmlFor="inputIn" className="registration-text08">
                  First Name:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="John"
                  className="registration-textinput input"
                />
              </div>
              <div className="registration-last-name">
                <span htmlFor="inputIn" className="registration-text09">
                  Last Name
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="Doe"
                  className="registration-textinput1 input"
                />
              </div>
              <div className="registration-email">
                <span id="textLabel" className="registration-text10">
                  Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput2 input"
                />
              </div>
              <div className="registration-confirm-email">
                <span id="textLabel" className="registration-text11">
                  Confirm Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput3 input"
                />
              </div>
              <div className="registration-password">
                <span className="registration-text12">Password:</span>
                <input
                  type="password"
                  id="passwordIn"
                  required
                  minlength="4"
                  placeholder="Password"
                  className="registration-textinput4 input"
                />
              </div>
              <div className="registration-confirm-password">
                <span className="registration-text13">Confirm Password:</span>
                <input
                  type="password"
                  id="confirmedPassIn"
                  required
                  placeholder="Retype Password"
                  className="registration-textinput5 input"
                />
              </div>
            </div>
            <Link
              to="/survey"
              id="confirmButton"
              className="registration-sign-up-confirm button"
            >
              <span>
                <span>Continue</span>
                <br></br>
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
