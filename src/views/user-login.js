import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './user-login.css'

const UserLogin = () => {
  // Complete API data
  const [apiData, setApiData] = useState(null);
  
  // User input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordIncorrect, setIsIncorrect] = useState(false);

  // Page Navigation
  const history = useHistory();

  // API URL and headers
  const url = `https://if3mfcuocb.execute-api.us-east-1.amazonaws.com/test?email=${email}`;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  // Get user data from API
  const fetchLoginInfo = async () => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        header: headers
      };
      console.log("Fetching from API")
      // Get api data to compare here
      const response = await fetch(url, requestOptions);

      const data = await response.json();
      console.log("Data from API: " + JSON.stringify(data, null, 2))
      setApiData(data.result);
      console.log("Data set into setAPiData method (from fetchData): " + apiData)
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Fetching complete")
          resolve(data.result)
        }); // Simulate timeout by adding number here
      })
    } catch (error) {
      console.error(error);
    }
  }

  // Check if user exists
  const login = async () => {
    console.log("Waiting for fetch to finish...");
    const accountData = await fetchLoginInfo();
    console.log("Attempting Log In");
    try {
      console.log("Result of fetch: " + JSON.stringify(accountData));
      console.log("Logging in with these credentials: " +  email + " " + password);

      if (email === accountData.email.S) {
        if (password === accountData.password.S) {
          alert("Success");
          setIsIncorrect(false); // in case they try again after
          history.push({
            pathname: "/",
            state: { accountData },
          });
        } else {
          alert("Invalid password for email");
          setPassword("");
          setIsIncorrect(true);
        }
      } else {
        alert("Email does not have an account");
        console.log("Compared this: " + email + " with this: " + accountData.email.S);
        console.log("and compared this: " + password + " with this: " + accountData.password.S);
        setEmail("");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  // Handle submission of dat
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    login();
  }


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
      <div className="user-login-user-login-title">
        <h1 className="user-login-title">User Login</h1>
        <span className="user-login-text">
          <span>Hello! Please use your email and password to log in</span>
          <br></br>
        </span>
      </div>
      <div className="user-login-user-login-container">
        <form className="user-login-login-form" onSubmit={handleSubmit}>
          <div className="user-login-container1">
            <div className="user-login-email">
              <span id="textLabel" className="user-login-text3">
                Email:
              </span>
              <input
                type="email"
                id="emailIn"
                required
                placeholder="example@email.com"
                className="user-login-textinput input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user-login-password">
              <span htmlFor="inputIn" className="user-login-text4">
                Password:
              </span>
              <input
                type="password"
                id="inputIn"
                required
                placeholder="Password"
                className={isPasswordIncorrect ? 'user-login-password-incorrect' : 'user-login-password input'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              id="loginButton"
              type="submit"
              className="user-login-login-button button">
              Log in
            </button>
            <div className="user-login-to-registration-container">
              <span className="user-login-text5">
                <span>Don&apos;t have an account?</span>
                <br></br>
              </span>
              <Link to="/registration" className="user-login-navlink">
                Create one.
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
