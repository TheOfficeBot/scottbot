import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Activity from './components/Activity';
import Admin from './components/Administrator';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import AuthService from './helpers/AuthService.js';
import Login from './components/Login.js';
import Container from './components/Container.js';

<<<<<<< 7456e8916c2215bdad789a57eb4a25f24e4867bb
const auth = new AuthService("HpthymkekKBCqwn5w03aWCTvi6taPMb3", 'scottbot.auth0.com');
=======
import Activity from './components/Activity';
import Admin from './components/Administrator';
import { Router, Route, browserHistory } from 'react-router';
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
	    
	    	<Route path="/" component={App}/>
	    	<Route path="/login" auth={auth} component={Login}/>
	    	<Route path="/admin" component={Admin} onEnter={requireAuth}/>
	  
  	</Router>
)
>>>>>>> [fix] merge conflict fix

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  } 
}

const Routes = (
	 <Router history={browserHistory}>
	    <Route path="/" component={Container} auth={auth}>
	    	<Route path="/home" component={App}/>
	    	<Route path="/login"  component={Login}/>
	    	<Route path="/admin" component={Admin} onEnter={requireAuth}/>
	    </Route>
  	</Router>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
