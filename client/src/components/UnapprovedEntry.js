import React, { Component } from 'react';
import { getAPI, putAPI } from '../helpers/http';

class UnapprovedEntry extends Component {
	constructor(props){
		super(props);
		this.state ={
			approved: false
		}

	};

  	clickApproved(){
  		console.log("in click handler", this.props.entryData)
  		putAPI(this.props.entryData)
  		.then(function(update){
  			console.log("in click handler for approval", update)
  		})
  	}

	render() {
	    if(!this.props.entryData){
	    	return (
	    		<div>Loading</div>
	    		)
	    }
	    else {
	    	return (
	    		<div className="card-wrap admin">
		  				<img src={this.props.entryData.text} height="150"/>
		    			<p className="attribute">Username: {this.props.entryData.name}</p>
		    			<p className="attribute">Pending approval</p>
		    			<p className="attribute">Posted 5 minutes ago</p>
		    			<button onClick={this.clickApproved.bind(this)}>Approve</button>
		  		</div>)
		}
  }
}

export default UnapprovedEntry;
