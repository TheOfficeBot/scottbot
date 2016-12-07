import React, { Component } from 'react';
import { getAPI } from '../helpers/http';
import UnapprovedEntry from './UnapprovedEntry.js'

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
              .then(item =>{
              	console.log("in comp will mount")
              	console.log(item.data)
              	var unapproved= [];
              	for(var i = 0; i<item.data.length; i++){
              		if(item.data[i].approved === false){
              			unapproved.push(item.data[i])
              		};
              	};
              	console.log("unapproved", unapproved)
                 this.setState({
                      entries: unapproved
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
      	<section>
      		{entryList}
      	</section>
      </main>

    );
  }
}

export default Admin;
