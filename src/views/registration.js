import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './registration.css'

const Registration = (props) => {
  // User information variables
  const [apiData, setApiData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleRegister = async() => {
    const url = `https://if3mfcuocb.execute-api.us-east-1.amazonaws.com/test?email=${email}`;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
    });

    const newUserData = {
      result: {
        password: { S: password },
        restraunts: [],
        lastName: { S: lastName },
        username: "",
        email: { S: email },
        firstName: { S: firstName },
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        console.log('User created successfully');
      } else {
        console.error('Error creating user:', response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }

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
      </div>
      <div className="registration-registration-container">
        <form className="registration-registration-form">
          <div className="registration-all-fields">
            <div className="registration-user-fields">
              <div className="registration-first-name">
                <span htmlFor="inputIn" className="registration-text03">
                  First Name:
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="John"
                  className="registration-textinput input"
                  value={ firstName }
                  onChange={ (e) => setFirstName(e.target.value) }
                />
              </div>
              <div className="registration-last-name">
                <span htmlFor="inputIn" className="registration-text04">
                  Last Name
                </span>
                <input
                  type="text"
                  id="inputIn"
                  required
                  placeholder="Doe"
                  className="registration-textinput1 input"
                  value={ lastName }
                  onChange={ (e) => setLastName(e.target.value) }
                />
              </div>
              <div className="registration-email">
                <span id="textLabel" className="registration-text05">
                  Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput2 input"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </div>
              <div className="registration-confirm-email">
                <span id="textLabel" className="registration-text06">
                  Confirm Email:
                </span>
                <input
                  type="email"
                  id="emailIn"
                  required
                  placeholder="example@email.com"
                  className="registration-textinput3 input"
                  value={ emailCheck }
                  onChange={ (e) => setEmailCheck(e.target.value) }
                />
              </div>
              <div className="registration-password">
                <span className="registration-text07">Password:</span>
                <input
                  type="password"
                  id="passwordIn"
                  required
                  minlength="4"
                  placeholder="Password"
                  className="registration-textinput4 input"
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                />
              </div>
              <div className="registration-confirm-password">
                <span className="registration-text08">Confirm Password:</span>
                <input
                  type="password"
                  id="confirmedPassIn"
                  required
                  placeholder="Retype Password"
                  className="registration-textinput5 input"
                  value={ passwordCheck }
                  onChange={ (e) => setPasswordCheck(e.target.value) }
                />
              </div>
            </div>
            <button
              id="confirmButton"
              type="button"
              className="registration-sign-up-confirm button"
              onClick={ handleRegister }
            >
              <span>
                <span>Finish</span>
                <br></br>
              </span>
            </button>
            <div className="registration-to-login-container">
              <span className="registration-text12">
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
        </form>
      </div>
    </div>
  )
}

export default Registration
