import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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

  // Page navigation
  const history = useHistory();

  // Edit Mode (default to false)
  const [editMode, setEditMode] = useState(false);
  const [emailCheck, setEmailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // API url and headers
  const url = `https://if3mfcuocb.execute-api.us-east-1.amazonaws.com/test?email=${email}`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  // Access the logged in user's information
  const { state } = props.location;
  // Check if AccountData is defined (state if undefined, state.apiData otherwise)
  const accountData = state && state.accountData;

  // Preset the text input boxes with logged in user data
  if (accountData && !isDataSet) {
    setFirstName(accountData.firstName.S);
    setLastName(accountData.lastName.S);
    setEmail(accountData.email.S);
    setPassword(accountData.password.S);
    setIsDataSet(true);
  }

  // Save changes to user account data and push the changes to api/database
  const handleSave = async() => {
    const updatedAccountData = {
      "username": accountData.username.S,
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      //"restraunts": accountData.restraunts,
      "password": password
    };

    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
      headers: headers,
      body: JSON.stringify(updatedAccountData)
    };

    const response = await fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // Turn on and off edit mode
  const toggleEditMode = () => {
    if (editMode) {
      // Check if user data has been changed
      if ((firstName != accountData.firstName.S) || (lastName != accountData.lastName.S) || (email != accountData.email.S) || (password != accountData.password.S)) {
        // check if email is inputted the same
        if (email == emailCheck) {
          // check if password is inputted the same
          if (password == passwordCheck) {
            handleSave();
            setEditMode(!editMode);
            console.log("Information Saved!");
          } else {
            alert("Passwords don't match");
          }
        } else {
          alert("Passwords don't match");
        }
      } else {
        setEditMode(!editMode);
      }
      setEmailCheck("");
      setPasswordCheck("");
    } else {
      console.log("Edit Mode On");
      setEditMode(!editMode);
    }
  }

  // Delete user account 
  const deleteAccount = async() => {
    const userConfirmed = window.confirm('Are you sure you want to delete your account?');

    if (userConfirmed) {
      // If User clicked 'OK'
      console.log('User clicked OK');
      var requestOptions = {
        method: 'DELETE',
        redirect: 'follow',
        headers: headers,
      };
  
      await fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
      // Erase logged in user data
      accountData = undefined;

      // Go back to main page with blank user data
      history.push({
        pathname: "/",
        state: { accountData },
      });
    } else {
      // If User clicked 'Cancel' or closed the dialog
      console.log('User clicked Cancel');
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
      <NavigatorBar rootClassName="navigator-bar-root-class-name4" accountData={ accountData }></NavigatorBar>
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
                  minLength="4"
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
            <label>Clear rating history</label>
            <button type="button" className="user-information-button button">
              Clear
            </button>
          </form>
          <button
            type="button"
            className="user-information-delete-account-button button"
            onClick={ deleteAccount }
          >
            <span className="user-information-text12">
              <span>Delete Account</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserInformation
