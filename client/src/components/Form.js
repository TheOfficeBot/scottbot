import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { postAPI } from '../helpers/http';
import { validateImage } from '../helpers/validation';
import thumbs from '../assets/thumbs_up.gif';


class Form  extends Component{
	constructor() {
	    super();
	    this.state = {
	    	isSending: false,
	    	isSent: false
	    }
	}

	handleClick(e){
		e.preventDefault();
		this.setState({
			isSent: false
		})
	}


	handleSubmit(e) {
	    e.preventDefault();
	    
	    	
	


	    this.setState({
	    	isSending: true
	    })
	    const formData = {
	    	name:ReactDOM.findDOMNode(this.refs.name).value,
	    	character:  ReactDOM.findDOMNode(this.refs.character).value,
	    	image:  ReactDOM.findDOMNode(this.refs.image).value
	    } 
	    if( validateImage(formData.image) !== false ){
	    	this.setState({
	    		isSending: true
	    	})
	      postAPI(formData)
	        .then(resp => {
	            console.log(resp)
	            	    this.setState({
	            	        isSending: false,
	            	        isSent: true
	            	    })
	        })
	    } else {
	    	this.setState({
	    		validImage: false
	    	})
	    }

	}

  render () {
  	const formClass = classNames({
      'ugc-form': true,
      'is-hidden': this.state.isSent
    });
    const successClass = classNames({
      'form-success': true,
      'is-visible': this.state.isSent
    });
    return (
    		<div className="form-wrap">
	  	      	 <form className={ formClass } onSubmit={this.handleSubmit.bind(this)}>
	    	 		<input   type="text" ref="name" />
	    	 		<input type="text"  ref="image"/>

	    	 		   <label>Which Office Character are  You Adding?:          
			          <select  ref="character">
				            <option value="michael">Michael Scott</option>
				            <option value="dwight">Dwight Shrute</option>
				            <option value="jim">Jim</option>
				            <option value="stanley">Stanley</option>
		          	    </select>
		        	</label>
	  			<input type="submit" value="submit"/>
	  			{this.state.isSending ? <p>SENDING</p> : null}
	    	 	</form>
	    	 	<div className={successClass}>
	    	 		
	    	 		<div className="thumbs-up" style={{backgroundImage: 'url(' + thumbs + ')'}}>
	    	 		</div>
	    	 		<h3>FACT: <span>Your submission has been sent!</span></h3>
	    	 		<a className="reset-form" onClick={this.handleClick.bind(this)}> Create Another One</a>
	    	 	</div>
    		</div>

    )
  }
}
export default Form