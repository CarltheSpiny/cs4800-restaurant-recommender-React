import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import logo from '../primary-logo.jpg'
import NavigationLinks from './navigation-links'
import './navigator-bar.css'

const NavigatorBar = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigator-bar-header ${props.rootClassName} `}
    >
      <Link to="/directory" className="navigator-bar-navlink">
        <img
          alt="logo"
          src={logo}
          className="navigator-bar-image"
          state={{accountData: props.accountData}}
        />
      </Link>
      <div className="navigator-bar-nav">
        <NavigationLinks
          rootClassName="navigation-links-root-class-name8"
          className=""
          accountData={ props.accountData }
        ></NavigationLinks>
      </div>
      <div className="navigator-bar-btn-group">
        <Link to="/user-login" className="navigator-bar-login button">
          {props.Login}
        </Link>
        <Link to="/registration" className="navigator-bar-register button">
          {props.Register}
        </Link>
      </div>
    </header>
  )
}

NavigatorBar.defaultProps = {
  image_alt: 'logo',
  rootClassName1: '',
  SearchPage: 'Search',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  button: 'Button',
  HistoryPage: 'History',
  image_alt2: 'image',
  rootClassName: '',
  ProfilePage: 'My Profile',
  HomePage: 'Home',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  Login: 'Login',
  textarea_placeholder: 'placeholder',
  Register: 'Register',
  button1: '',
  image_alt1: 'image',
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  accountData: null,  // Set accountData to default to null
}

NavigatorBar.propTypes = {
  image_alt: PropTypes.string,
  rootClassName1: PropTypes.string,
  SearchPage: PropTypes.string,
  image_src2: PropTypes.string,
  button: PropTypes.string,
  HistoryPage: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  ProfilePage: PropTypes.string,
  HomePage: PropTypes.string,
  image_src: PropTypes.string,
  Login: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  Register: PropTypes.string,
  button1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  accountData: PropTypes.object,   // Get user data from login
}

export default NavigatorBar
