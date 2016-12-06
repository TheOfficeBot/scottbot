import React, { Component } from 'react';
import UnapprovedEntry from './UnapprovedEntry.js'

class Admin extends Component {
	constructor(){
		super();
		this.state ={
			entries: [
			]
		}
	}
  render() {
    return (
      <main className="App">
      	<header className="adminhead">
      		<h1>Logged In As Administrator</h1>
      	</header> 
      	<section>
      		<UnapprovedEntry/>
      	</section>
      </main>

    );
  }
}

export default Admin;
