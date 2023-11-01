import React from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import './user-information.css'

const UserInformation = (props) => {
  return (
    <div className="user-information-container">
      <Helmet>
        <title>UserInformation - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="UserInformation - cs4800-restaurant-recommender"
        />
      </Helmet>
      <NavigatorBar rootClassName="navigator-bar-root-class-name4"></NavigatorBar>
      <Title
        text="You can update your account information here."
        heading="Your Information"
        rootClassName="title-root-class-name2"
      ></Title>
      <div className="user-information-registration-container">
        <form className="user-information-registration-form">
          <div className="user-information-all-fields">
            <div className="user-information-user-fields">
              <div className="user-information-user-name-field">
                <span htmlFor="inputIn" className="user-information-text">
                  First Name:
                </span>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="user-information-textinput input"
                />
              </div>
              <div className="user-information-user-name-field01">
                <span htmlFor="inputIn" className="user-information-text01">
                  Last Name
                </span>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="user-information-textinput01 input"
                />
              </div>
              <div className="user-information-user-name-field02">
                <span id="textLabel" className="user-information-text02">
                  Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  placeholder="example@email.com"
                  className="user-information-textinput02 input"
                />
              </div>
              <div className="user-information-user-name-field03">
                <span id="textLabel" className="user-information-text03">
                  Confirm Email:
                </span>
                <input
                  type="email"
                  id="confirmEmailIn"
                  placeholder="example@email.com"
                  className="user-information-textinput03 input"
                />
              </div>
              <div className="user-information-user-name-field04">
                <span className="user-information-text04">Password:</span>
                <input
                  type="password"
                  id="passwordIn"
                  minlength="4"
                  placeholder="Password"
                  className="user-information-textinput04 input"
                />
              </div>
              <div className="user-information-user-name-field05">
                <span className="user-information-text05">
                  Confirm Password:
                </span>
                <input
                  type="password"
                  id="confirmedPassIn"
                  placeholder="Retype Password"
                  className="user-information-textinput05 input"
                />
              </div>
              <div className="user-information-user-name-field06">
                <span htmlFor="inputIn" className="user-information-text06">
                  Street Address:
                </span>
                <input
                  type="text"
                  id="adressIn"
                  placeholder="123 Main Street"
                  className="user-information-textinput06 input"
                />
              </div>
              <div className="user-information-user-name-field07">
                <span className="user-information-text07">Second Line:</span>
                <input
                  type="text"
                  id="secondLineIn"
                  placeholder="Apt/Unit/Suite"
                  className="user-information-textinput07 input"
                />
              </div>
              <div className="user-information-user-name-field08">
                <span htmlFor="inputIn" className="user-information-text08">
                  City:
                </span>
                <input
                  type="text"
                  id="cityIn"
                  placeholder="Pomona"
                  className="user-information-textinput08 input"
                />
              </div>
              <div className="user-information-user-name-field09">
                <label htmlFor="countryIn" className="user-information-text09">
                  Country:
                </label>
                <select id="countryIn" className="user-information-select">
                  <option value="default" selected>
                    United States
                  </option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 1">Not United States</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="user-information-user-name-field10">
                <span htmlFor="inputIn" className="user-information-text10">
                  State/Province:
                </span>
                <input
                  type="text"
                  id="stateIn"
                  placeholder="California"
                  className="user-information-textinput09 input"
                />
              </div>
              <div className="user-information-user-name-field11">
                <span htmlFor="inputIn" className="user-information-text11">
                  Zip/Postal Code:
                </span>
                <input
                  type="text"
                  id="zipCodeIn"
                  placeholder="5-Digit Zip Code"
                  className="user-information-textinput10 input"
                />
              </div>
            </div>
            <button
              id="confirmButton"
              type="button"
              className="user-information-sign-up-confirm button"
            >
              <span>
                <span>Save</span>
                <br></br>
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="user-information-container1">
        <h1 className="Heading">Settings and your Data</h1>
        <span className="Content">
          You can manage settings and other data here.
        </span>
      </div>
      <div className="user-information-container2">
        <div className="user-information-container3">
          <form className="user-information-form">
            <label>Retake Survey</label>
            <button type="button" className="user-information-button button">
              Start
            </button>
          </form>
          <form className="user-information-form1">
            <label>Clear rating history</label>
            <button type="button" className="user-information-button1 button">
              Clear
            </button>
          </form>
          <form className="user-information-form2">
            <label>Clear search history</label>
            <button type="button" className="user-information-button2 button">
              Clear
            </button>
          </form>
          <form className="user-information-form3">
            <label>Display your rating instead of global</label>
            <input type="checkbox" className="user-information-checkbox" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserInformation
