import React, { PropTypes as T } from 'react'
import AuthService from '../helpers/AuthService.js'


export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    console.log(this.props)
    const { auth } = this.props
    return (

          <button bsStyle="primary" onClick={auth.login.bind(this)}>Login</button>


    )
  }
}

export default Login;