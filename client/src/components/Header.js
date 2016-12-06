import React, { Component } from 'react';
import { Link } from 'react-router';

class Header  extends Component{
  render () {
    return (
      <header>
      	<Link to="/admin">Admin</Link>
      </header>
    )
  }
}
export default Header