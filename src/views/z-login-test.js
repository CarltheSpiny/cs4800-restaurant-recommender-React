import React from 'react'

import { Helmet } from 'react-helmet'

import SideMenu from '../components/side-menu'
import './z-login-test.css'

const ZLoginTest = (props) => {
  return (
    <main className="z-login-test-container">
      <Helmet>
        <title>zLoginTest - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="zLoginTest - cs4800-restaurant-recommender"
        />
      </Helmet>
      <SideMenu rootClassName="side-menu-root-class-name2"></SideMenu>
      <form className="z-login-test-form form-signin">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="z-login-test-image mb-4"
        />
        <h1 className="h3m mb-3f w-normal">Please Sign in</h1>
        <div>
          <label htmlFor="floatingInput">
            <span>Email address</span>
            <br></br>
          </label>
          <input
            type="email"
            id="floatingInput"
            placeholder="name@example.com"
            className="z-login-test-input input form-control"
          />
        </div>
        <div>
          <label htmlFor="floatingPassword">
            <span>Password</span>
            <br></br>
          </label>
          <input
            type="password"
            id="floatingPassword"
            placeholder="Password"
            className="z-login-test-input1 form-control"
          />
        </div>
        <div className="z-login-test-container3">
          <input
            type="checkbox"
            id="flex-check-default"
            name="xe"
            value="remember-me"
            checked
          />
          <label htmlFor="flex-check-default" className="form-check-label">
            <span>Remember Me</span>
            <br></br>
          </label>
        </div>
        <button type="submit" className="z-login-test-button button">
          Sign in
        </button>
      </form>
    </main>
  )
}

export default ZLoginTest
