import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Activity from './components/Activity';
import Admin from './components/Administrator';
import { Router, Route, browserHistory, IndexRedirect, NotFoundRoute } from 'react-router';
// import './index.css';
import AuthService from './helpers/AuthService.js';
import Login from './components/Login.js';
import Container from './components/Container.js';

const auth = new AuthService("HpthymkekKBCqwn5w03aWCTvi6taPMb3", 'scottbot.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const Routes = (
	 <Router history={browserHistory}>
	    <Route path="/" component={Container} auth={auth}>
	    		<IndexRedirect to="/activity"/>
          <NotFoundRoute handler={App} />
	    	<Route path="activity" component={App}/>
	    	<Route path="login"  component={Login}/>
	    	<Route path="admin" component={Admin} onEnter={requireAuth}/>
	    </Route>
  	</Router>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
