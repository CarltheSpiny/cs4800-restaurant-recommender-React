import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import Title from '../components/title'
import './user-information.css'

const UserInformation = (props) => {
  // User information variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Check if the user's data has been set once (is false; true if data was set previously)
  const [isDataSet, setIsDataSet] = useState(false);

  // Edit Mode (default to false)
  const [editMode, setEditMode] = useState(false);
  const [emailCheck, setEmailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // Access the logged in user's information
  const { state } = props.location;
  // Check if userData is defined (state if undefined, state.apiData otherwise)
  const userData = state && state.accountData;

  if (userData && !isDataSet) {
    setFirstName(userData.firstName.S);
    setLastName(userData.lastName.S);
    setEmail(userData.email.S);
    setPassword(userData.password.S);
    setIsDataSet(true);
  }

  const toggleEditMode = () => {
    if (editMode) {
      console.log("Information Saved!");
      setEditMode(!editMode);
    } else {
      console.log("Edit Mode On");
      setEditMode(!editMode);
    }
  }

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
              <div className="user-information-first-name">
                <span htmlFor="inputIn" className="user-information-text">
                  First Name:
                </span>
                <input
                  type="text"
                  id="firstName"
                  readOnly={ !editMode }
                  required
                  placeholder="John"
                  className="user-information-textinput input"
                  value={ firstName }
                  onChange={ (e) => setFirstName(e.target.value) }
                />
              </div>
              <div className="user-information-last-name">
                <span htmlFor="inputIn" className="user-information-text01">
                  Last Name:
                </span>
                <input
                  type="text"
                  id="lastName"
                  readOnly={ !editMode }
                  required
                  placeholder="Doe"
                  className="user-information-textinput1 input"
                  value={ lastName }
                  onChange={ (e) => setLastName(e.target.value) }
                />
              </div>
              <div className="user-information-email">
                <span id="textLabel" className="user-information-text02">
                  Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  readOnly={ !editMode }
                  required
                  placeholder="example@email.com"
                  className="user-information-textinput2 input"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </div>
              <div className="user-information-confirm-email" style={{ display: editMode ? 'flex' : 'none' }}>
                <span id="textLabel" className="user-information-text03">
                  Confirm Email:
                </span>
                <input
                  type="email"
                  id="confirmEmailIn"
                  readOnly={ !editMode }
                  required
                  placeholder="example@email.com"
                  className="user-information-textinput3 input"
                  value={ emailCheck }
                  onChange={ (e) => setEmailCheck(e.target.value) }
                />
              </div>
              <div className="user-information-password">
                <span className="user-information-text04">Password:</span>
                <input
                  type="password"
                  id="passwordIn"
                  disabled={ !editMode }
                  required
                  minlength="4"
                  placeholder="Password"
                  className="user-information-textinput4 input"
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                />
              </div>
              <div className="user-information-confirm-password" style={{ display: editMode ? 'flex' : 'none' }}>
                <span className="user-information-text05">
                  Confirm Password:
                </span>
                <input
                  type="password"
                  id="confirmedPassIn"
                  disabled={ !editMode }
                  required
                  placeholder="Retype Password"
                  className="user-information-textinput5 input"
                  value={ passwordCheck }
                  onChange={ (e) => setPasswordCheck(e.target.value) }
                />
              </div>
            </div>
            <button
              id="confirmButton"
              type="button"
              className="user-information-edit-save-button button"
              onClick={ toggleEditMode }
            >
              <span>
                <span>{ editMode ? "Save" : "Edit" }</span>
                <br></br>
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="user-information-subtitle">
        <h1 className="Heading">Settings and your Data</h1>
        <span className="Content">
          You can manage settings and other data here.
        </span>
      </div>
      <div className="user-information-more-options-container">
        <div className="user-information-container1">
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
