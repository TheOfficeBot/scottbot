import React, { Component } from 'react';
import { getAPI } from '../helpers/http';

class UnapprovedEntry extends Component {
	constructor(props){
		super(props);
		this.state ={
			entries: [
			]
		}
	};
	componentWillMount() {
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
		console.log(this.state.entries)
		var test = this.state.entries[5]
		console.log("test in unnapproved entry", test)
    if(!this.state.entries[5]){
    	return (
    		<div>Loading</div>
    		)
    } 
    else {
    console.log("should be url", this.state.entries[5].uri)
    return (
    	<div className="card-wrap admin">
    		<img src={this.state.entries[5].uri} height="150"/>
    		<p className="attribute">Username: {this.state.entries[5].username}</p>
    		<p className="attribute">Approved: {this.state.entries[5].approved}</p>
    		<p className="attribute">Posted: 5 minutes ago</p>
    		<button>Approve</button>
    	</div>
    )}
  }
}

export default UnapprovedEntry;
