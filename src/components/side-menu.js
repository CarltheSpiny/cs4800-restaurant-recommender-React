import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './side-menu.css'

const SideMenu = (props) => {
  return (
    <div className={`side-menu-container ${props.rootClassName} `}>
      <div className="side-menu-sidebar">
        <nav className="side-menu-nav">
          <img
            alt="image"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="side-menu-image"
          />
          <Link to="/z-seatch-test" className="side-menu-navlink">
            Search
          </Link>
          <Link to="/z-home-test" className="side-menu-navlink1">
            Home
          </Link>
          <span className="side-menu-text">My Profile</span>
          <span className="side-menu-text1">History</span>
          <Link to="/z-login-test" className="side-menu-navlink2">
            Sign In / Log out
          </Link>
        </nav>
      </div>
    </div>
  )
}

SideMenu.defaultProps = {
  rootClassName: '',
}

SideMenu.propTypes = {
  rootClassName: PropTypes.string,
}

export default SideMenu
