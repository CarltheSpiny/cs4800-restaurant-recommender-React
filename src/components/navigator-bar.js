import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigator-bar.css'

const NavigatorBar = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigator-bar-header ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="navigator-bar-image"
      />
      <div className="navigator-bar-nav">
        <nav className="navigator-bar-nav1">
          <div className="navigator-bar-container">
            <Link to="/" className="navigator-bar-navlink">
              {props.HomePage}
            </Link>
            <Link to="/restaurant-search" className="navigator-bar-navlink1">
              {props.SearchPage}
            </Link>
          </div>
          <div className="navigator-bar-container1">
            <Link to="/user-information" className="navigator-bar-navlink2">
              {props.ProfilePage}
            </Link>
            <Link to="/rating-history" className="navigator-bar-navlink3">
              {props.HistoryPage}
            </Link>
          </div>
        </nav>
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
}

export default NavigatorBar
