import React, { PropTypes as T } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import AuthService from '../helpers/AuthService.js'


export class LoginView extends React.Component {
  constructor(){
    super();
    this.state = {
      focusUser: false,
      focusPass: false
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    // on form submit, sends the credentials to auth0 api
    this.props.auth.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  }

  handleFocusUser(e){
    this.setState({
      focusUser: true
    })    
  }

  handleFocusPass(e){
    this.setState({
      focusPass: true
    })    
  }

  render() {
    const nameInput = classNames({
      'input': true,
      'input-filled': this.state.focusUser
    });
    const imageInput = classNames({
      'input': true,
      'input-filled': this.state.focusPass
    });
    return (
      <div className="login-wrap">
        
        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Admin Login</h2>
          <span className={nameInput}>
              <input className="input_field" type="text" type="email" ref="email"  onFocus={this.handleFocusUser.bind(this)}     />
              <label className="input_label">
                <span className="input_label-content">Username </span>
              </label>
          </span>
          <span className={imageInput}>
              <input type="text"type="password" ref="password" className="input_field"  onFocus={this.handleFocusPass.bind(this)}    />
              <label className="input_label">
                <span className="input_label-content">Password</span>
              </label>
          </span>

          <button className="btn-submit" type="submit">SIGN IN</button>


        </form>
      </div>
    )
  }
}

export default LoginView