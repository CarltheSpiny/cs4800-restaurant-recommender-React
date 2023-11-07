import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.HomePage}
      </Link>
      <Link to="/restaurant-search" className="navigation-links-navlink1">
        {props.SearchPage}
      </Link>
      <Link to="/restaurant-history" className="navigation-links-navlink2">
        {props.HistoryPage}
      </Link>
      <Link to="/user-information" className="navigation-links-navlink3">
        {props.ProfilePage}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  HistoryPage: 'History',
  rootClassName: '',
  ProfilePage: 'My Profile',
  HomePage: 'Home',
  SearchPage: 'Search',
}

NavigationLinks.propTypes = {
  HistoryPage: PropTypes.string,
  rootClassName: PropTypes.string,
  ProfilePage: PropTypes.string,
  HomePage: PropTypes.string,
  SearchPage: PropTypes.string,
}

export default NavigationLinks
