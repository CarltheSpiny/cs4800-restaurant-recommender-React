import React from 'react'

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
          <span className="side-menu-text">Search</span>
          <span className="side-menu-text1">Home</span>
          <span className="side-menu-text2">My Profile</span>
          <span className="side-menu-text3">Your History</span>
          <span className="side-menu-text4">Sign In / Log out</span>
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
