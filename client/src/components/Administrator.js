import React, { Component } from 'react';
import { getAPI } from '../helpers/http';
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
      	</header> 
      	<section className="q-grid">
      		{entryList}
      	</section>
      </main>

    );
  }
}

export default Admin;
