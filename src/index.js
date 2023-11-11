import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Survey from './views/survey'
import UserInformation from './views/user-information'
import Registration from './views/registration'
import RestaurantSearch from './views/restaurant-search'
import UserLogin from './views/user-login'
import RatingFromSurvey from './views/rating-from-survey'
import NotImplemented from './views/not-implemented'
import PersonalHome from './views/personal-home'
import RestrauntRating from './views/restraunt-rating'
import RestaurantHistoryPage from './views/restaurant-history'
import SiteDirectory from './views/landing-page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={RestrauntRating} exact path="/restraunt-rating" />
        <Route component={PersonalHome} exact path="/" />
        <Route component={RestaurantHistoryPage} exact path="/restaurant-history" />
        <Route component={SiteDirectory} exact path="/directory" />
        <Route component={Survey} exact path="/survey" />
        <Route component={UserInformation} exact path="/user-information" />
        <Route component={Registration} path="/registration" />
        <Route component={RestaurantSearch} exact path="/restaurant-search" />
        <Route component={UserLogin} exact path="/user-login" />
        <Route component={RatingFromSurvey} exact path="/rating-from-survey" />
        <Route component={NotImplemented} path="**" />
        
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
