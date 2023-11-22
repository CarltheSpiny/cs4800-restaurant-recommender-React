import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigatorBar from '../components/navigator-bar'
import './user-login.css'

const UserLogin = (props) => {
  const [apiData, setApiData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const url = `https://if3mfcuocb.execute-api.us-east-1.amazonaws.com/test?email=${email}`;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const login = () => {
    // Validate inputted data with saved api data
    console.log(apiData);
    if (apiData && (email === apiData.email.S) && (password === apiData.password.S)) {
      history.push({
        pathname: "/",
        state: { apiData },
      });
      alert("Success!");
    } else {
      alert("Invalid Credentials!");
    }
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
        <form className="user-login-login-form">
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
                className="user-login-textinput1 input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              id="loginButton"
              type="button"
              className="user-login-login-button button"
              onClick={login}>
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
