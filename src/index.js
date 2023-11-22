import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import UserInformation from './views/user-information'
import Registration from './views/registration'
import RestaurantSearch from './views/restaurant-search'
import UserLogin from './views/user-login'
import NotImplemented from './views/not-implemented'
import PersonalHome from './views/personal-home'
import RestrauntRating from './views/restraunt-rating'
import RestaurantHistory from './views/restaurant-history'
import Directory from './views/dev-directory'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PersonalHome} exact path="/" />
        <Route component={Directory} exact path="/directory" />
        <Route component={RestrauntRating} exact path="/restraunt-rating" />
        <Route component={RestaurantHistory} exact path="/restaurant-history" />
        <Route component={UserInformation} exact path="/user-information" />
        <Route component={Registration} exact path="/registration" />
        <Route component={RestaurantSearch} exact path="/restaurant-search" />
        <Route component={UserLogin} exact path="/user-login" />
        <Route component={NotImplemented} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
