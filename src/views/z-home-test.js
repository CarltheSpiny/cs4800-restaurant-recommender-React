import React from 'react'

import { Helmet } from 'react-helmet'

import SideMenu from '../components/side-menu'
import RestaurantInstance from '../components/restaurant-instance'
import './z-home-test.css'

const ZHomeTest = (props) => {
  return (
    <div className="z-home-test-container">
      <Helmet>
        <title>zHomeTest - cs4800-restaurant-recommender</title>
        <meta
          property="og:title"
          content="zHomeTest - cs4800-restaurant-recommender"
        />
      </Helmet>
      <h1 className="z-home-test-text">Personalized Restaurant List</h1>
      <SideMenu rootClassName="side-menu-root-class-name"></SideMenu>
      <div className="z-home-test-recomended">
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name1"></RestaurantInstance>
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name"></RestaurantInstance>
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name2"></RestaurantInstance>
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name3"></RestaurantInstance>
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name4"></RestaurantInstance>
        <RestaurantInstance rootClassName="restaurant-instance-root-class-name5"></RestaurantInstance>
      </div>
    </div>
  )
}

export default ZHomeTest
