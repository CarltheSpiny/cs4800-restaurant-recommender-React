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
import ZSeatchTest from './views/z-seatch-test'
import Registration from './views/registration'
import RestaurantSearch from './views/restaurant-search'
import UserLogin from './views/user-login'
import ZHomeTest from './views/z-home-test'
import ZLoginTest from './views/z-login-test'
import NotImplemented from './views/not-implemented'
import PersonalHome from './views/personal-home'
import RatingHistory from './views/rating-history'
import RestaurantViewer from './views/restaurant-viewer'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={UserInformation} exact path="/user-information" />
        <Route component={ZSeatchTest} exact path="/z-seatch-test" />
        <Route component={Registration} exact path="/registration" />
        <Route component={RestaurantSearch} exact path="/restaurant-search" />
        <Route component={UserLogin} exact path="/user-login" />
        <Route component={ZHomeTest} exact path="/z-home-test" />
        <Route component={ZLoginTest} exact path="/z-login-test" />
        <Route component={NotImplemented} path="**" />
        <Route component={PersonalHome} exact path="/" />
        <Route component={RatingHistory} exact path="/rating-history" />
        <Route component={RestaurantViewer} exact path="/restaurant-viewer" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
