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
              <div className="registration-user-name-field">
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
              <div className="registration-user-name-field01">
                <span htmlFor="inputIn" className="registration-text09">
                  Last Name
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="Doe"
                  className="registration-textinput01 input"
                />
              </div>
              <div className="registration-user-name-field02">
                <span id="textLabel" className="registration-text10">
                  Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput02 input"
                />
              </div>
              <div className="registration-user-name-field03">
                <span id="textLabel" className="registration-text11">
                  Confirm Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput03 input"
                />
              </div>
              <div className="registration-user-name-field04">
                <span className="registration-text12">Password:</span>
                <input
                  type="password"
                  id="passwordIn"
                  required
                  minlength="4"
                  placeholder="Password"
                  className="registration-textinput04 input"
                />
              </div>
              <div className="registration-user-name-field05">
                <span className="registration-text13">Confirm Password:</span>
                <input
                  type="password"
                  id="confirmedPassIn"
                  required
                  placeholder="Retype Password"
                  className="registration-textinput05 input"
                />
              </div>
              <div className="registration-user-name-field06">
                <span htmlFor="inputIn" className="registration-text14">
                  Street Address:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="123 Main Street"
                  className="registration-textinput06 input"
                />
              </div>
              <div className="registration-user-name-field07">
                <span className="registration-text15">Second Line:</span>
                <input
                  type="text"
                  id="inputIn"
                  placeholder="Apt/Unit/Suite"
                  className="registration-textinput07 input"
                />
              </div>
              <div className="registration-user-name-field08">
                <span htmlFor="inputIn" className="registration-text16">
                  City:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="Pomona"
                  className="registration-textinput08 input"
                />
              </div>
              <div className="registration-user-name-field09">
                <label htmlFor="countryIn" className="registration-text17">
                  Country:
                </label>
                <select id="countryIn" required className="registration-select">
                  <option value="default" selected>
                    United States
                  </option>
                  <option value="Option 1">Not United States</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="registration-user-name-field10">
                <span htmlFor="inputIn" className="registration-text18">
                  State/Province:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="California"
                  className="registration-textinput09 input"
                />
              </div>
              <div className="registration-user-name-field11">
                <span htmlFor="inputIn" className="registration-text19">
                  Zip/Postal Code:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="5-Digit Zip Code"
                  className="registration-textinput10 input"
                />
              </div>
            </div>
            <button
              id="confirmButton"
              type="button"
              className="registration-sign-up-confirm button"
            >
              <span>
                <span>Sign up</span>
                <br></br>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
