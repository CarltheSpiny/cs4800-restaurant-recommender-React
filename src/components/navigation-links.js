import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  // console.log("Account Info: " + props.accountData)
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to={{ pathname: "/", state: { accountData: props.accountData } }} className="navigation-links-navlink">
        {props.HomePage}
      </Link>
      <Link to={{ pathname: "/restaurant-search", state: { accountData: props.accountData } }} className="navigation-links-navlink1">
        {props.SearchPage}
      </Link>
      <Link to={{ pathname: "/restaurant-history", state: { accountData: props.accountData } }} className="navigation-links-navlink2">
        {props.HistoryPage}
      </Link>
      <Link to={{ pathname: "/user-information", state: { accountData: props.accountData } }} className="navigation-links-navlink3">
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
  //accountData: undefined,  // Set accountData to default to undefined
}

NavigationLinks.propTypes = {
  HistoryPage: PropTypes.string,
  rootClassName: PropTypes.string,
  ProfilePage: PropTypes.string,
  HomePage: PropTypes.string,
  SearchPage: PropTypes.string,
  accountData: PropTypes.object,   // Get user data from login
}

export default NavigationLinks
