import React, { Component } from 'react';
import { getAPI } from '../helpers/http';
import { browserHistory } from 'react-router';
import UnapprovedEntry from './UnapprovedEntry.js';
import _ from 'lodash';

class Admin extends Component {
	constructor(){
		super();
		this.state ={
			entries: [
			]
		}
	}
	componentWillMount(){
            getAPI('content')
              .then(resp =>{
                const entries = resp.data;
                console.log("ENTRIES", entries )
                  
                 this.setState({
                      entries: _.filter(entries, item => !item.approved)
                 })               
              })
        }

  handleLogOut(){
    localStorage.removeItem('id_token');
    browserHistory.replace('/activity')
  }
  render() {
  	  var entryList = this.state.entries.map( (item, idx)=>{
  			return (
	  			<UnapprovedEntry className="card-wrap admin" entryData={item} key={idx}/>
  			 )
  		})
    return (
      <main className="App">
      	<header className="adminhead">
      		<h1>Logged In As Administrator</h1>
              <button className="btn-logout" onClick={this.handleLogOut.bind(this)}>Log Out</button>
      	</header> 
      	<section className="q-grid">
      		{entryList}
      	</section>
      </main>

    );
  }
}

export default Admin;
