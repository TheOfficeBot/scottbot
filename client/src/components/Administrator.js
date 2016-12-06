// import React from "react";

// class Admin extends React.Component {
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			admin: false
// 		}
// 	}

// 	//function here...when authenticated change admin to true & reroute

// 	render(){
// 		return (
// 			<div className="admin-login">
// 				<button>Administrator</button>
// 			</div>
// 			)
// 	}
// }


import React, { Component } from 'react';
import { Link } from 'react-router'; 


class Admin extends Component {
  render() {
    return (
      <main className="App">
      <h1>Logged In As Administrator</h1> 
      </main>

    );
  }
}

export default Admin;