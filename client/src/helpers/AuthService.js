import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

<<<<<<< a6ef1da9989b357c76515bf561dc1f7e01dffdc8
export default class AuthService {
=======
export default class AuthServide {
>>>>>>> [feat] add authorization service to helpers from Auth0
	constructor(clientId, domain) {
		//Configure Auth0
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
<<<<<<< a6ef1da9989b357c76515bf561dc1f7e01dffdc8
				redirectUrl: "http://localhost:3000/#/admin",
=======
				redirectUrl: "http://localhost:3000/login",
>>>>>>> [feat] add authorization service to helpers from Auth0
				responseType: 'token'
			}
		})
		//Add callback for lock 'authenticated' event
		this.lock.on('authenticated', this._doAuthentication.bind(this))
		this.login = this.login.bind(this)
	}

	 _doAuthentication(authResult) {
	    // Saves the user token
	    this.setToken(authResult.idToken)
	    // navigate to the home route
<<<<<<< a6ef1da9989b357c76515bf561dc1f7e01dffdc8
	    browserHistory.replace('/admin')
=======
	    browserHistory.replace('/home')
>>>>>>> [feat] add authorization service to helpers from Auth0
  	}
  	 login() {
    	// Call the show method to display the widget.
    	this.lock.show()
  	}

	  loggedIn() {
	    // Checks if there is a saved token and it's still valid
	    return !!this.getToken()
	  }

	  setToken(idToken) {
	    // Saves user token to local storage
	    localStorage.setItem('id_token', idToken)
	  }

	  getToken() {
	    // Retrieves the user token from local storage
	    return localStorage.getItem('id_token')
	  }

	  logout() {
	    // Clear user token and profile data from local storage
	    localStorage.removeItem('id_token');
	  }
}