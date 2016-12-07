import React, { Component } from 'react';
import { getAPI, putAPI } from '../helpers/http';
import TimeAgo from 'react-timeago'
import classNames from 'classnames';

class UnapprovedEntry extends Component {
	constructor(props){
		super(props);
		this.state ={
			approved: false
		}
		
	};
	
  	clickApproved(){
  		console.log("in click handler", this.props.entryData)
  		// putAPI(this.props.entryData)
  		// .then(function(update){
  		// 	console.log("in click handler for approval", update)
  		// })
  		this.setState({
  			approved: true
  		})
  	}

	render() {
		const {entryData} = this.props
		const imgStyle = {
			backgroundImage: 'url(' + this.props.entryData.text + ')'
		}
		const approveClass = classNames({
		  'q-btn': true,
		  'is-approved': this.state.approved
		});
		const btnlabel =  this.state.approved ? 'Approved ': 'Pending Approval';
		const timeStamp = (entryData.date)?entryData.date : "2016-12-05T18:40:53.794Z"; 
	    	return (
	    		<div className="q-item">
	    				<div className="q-img " style={imgStyle}></div>
		  			<div className="q-deets">
			  			<p ><span>Submited By:</span> {entryData.name}</p>
			  			<TimeAgo date={timeStamp}/>
		  			</div>
		    			<button className={approveClass} onClick={this.clickApproved.bind(this)}>{btnlabel}</button>
		  		</div>
		 )
		
  }
}

export default UnapprovedEntry;
