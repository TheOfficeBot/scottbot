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
	handleFocusName(e){
		this.setState({
			focusName: true
		})		
	}
	handleBlurName(e){
		this.setState({
			focusName: (ReactDOM.findDOMNode(this.refs.name).value.length > 1) ? true : false
		})		
	}
	handleFocusImage(e){
		this.setState({
			focusImage: true
		})		
	}
	handleBlurImage(e){
		this.setState({
			focusImage: (ReactDOM.findDOMNode(this.refs.image).value.length > 1) ? true : false
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
      	const nameInput = classNames({
      'input': true,
      'input-filled': this.state.focusName
    });
    const imageInput = classNames({
      'input': true,
      'input-filled': this.state.focusImage
    });
    return (
    		<div className="form-wrap">
	  	      	 <form className={ formClass } onSubmit={this.handleSubmit.bind(this)}>
	  	      	 	<span className={nameInput}>
	  	      	 		<input className="input_field" onBlur={this.handleBlurName.bind(this)} onFocus={this.handleFocusName.bind(this)}   type="text" ref="name" />
	  	      	 		<label className="input_label">
	  	      	 			<span className="input_label-content">Your Name</span>
	  	      	 		</label>
	  	      	 	</span>
	  	      	 	<span className={imageInput}>
	  	      	 		<input className="input_field" onBlur={this.handleBlurImage.bind(this)} onFocus={this.handleFocusImage.bind(this)}     type="text" ref="image" />
	  	      	 		<label className="input_label">
	  	      	 			<span className="input_label-content">Image</span>
	  	      	 		</label>
	  	      	 	</span>
	    	 		


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