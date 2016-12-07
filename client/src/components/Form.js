import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { postAPI } from '../helpers/http';
import { validateImage } from '../helpers/validation';
import thumbs from '../assets/thumbs_up.gif';
import michael_tn from '../assets/scott_thumb.jpg';
import dwight_tn from '../assets/dwight_thumb.jpg';
import jim_tn from '../assets/jim_thumb.jpg';
import kevin_tn from '../assets/kevin_thumb.jpg';
import paper  from '../assets/Hexagon-2.jpg';

console.log(paper )

class Form  extends Component{
	constructor() {
	    super();
	    this.state = {
	    	isSending: false,
	    	isSent: false,
	    	character: '',
	    	validImage: false
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
		let imageTest = ReactDOM.findDOMNode(this.refs.image).value

		this.setState({
			focusImage: (ReactDOM.findDOMNode(this.refs.image).value.length > 1) ? true : false
			// validImage: validateImage(imageTest) ===false ? false : true
		})

	}


	handleSubmit(e) {
	    e.preventDefault();
	    // this.contentForm.reset();
	    this.setState({
	    	isSending: true
	    })
	    const formData = {
	    	name:ReactDOM.findDOMNode(this.refs.name).value,
	    	character:  this.state.character,
	    	image:  ReactDOM.findDOMNode(this.refs.image).value
	    } 

	    if( validateImage(formData.image) !== false ){		
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

	selectChar(char){
		this.setState({
			character: char
		})			
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
    const {character} = this.state
    //const preview = this.state.validImage
    return (
    		<div className="form-wrap">
    			<img src="" alt=""/>

	  	      	 <form className={ formClass } ref="contentForm" onSubmit={this.handleSubmit.bind(this)}>
	  	      	  	<div className="character-select">
    					<div style={{backgroundImage: 'url(' + michael_tn + ')'}} className={character == 'michael'? ' character is-selected ' : 'character'} onClick={() => this.selectChar('michael')}></div>
    					<div style={{backgroundImage: 'url(' + dwight_tn + ')'}} className={character == 'dwight'? ' character is-selected ' : 'character'} onClick={() => this.selectChar('dwight')}></div>
    					<div style={{backgroundImage: 'url(' + jim_tn + ')'}} className={character == 'jim'? ' character is-selected ' : 'character'} onClick={() => this.selectChar('jim')}></div>
    					<div style={{backgroundImage: 'url(' + kevin_tn + ')'}} className={character == 'kevin'? ' character is-selected ' : 'character'} onClick={() => this.selectChar('kevin')}></div>

    				</div>
    				<p className="selected-char">Character: <span>{this.state.character}</span> </p>
    				<span className={imageInput}>
    					<input className="input_field" onBlur={this.handleBlurImage.bind(this)} onFocus={this.handleFocusImage.bind(this)}     type="text" ref="image" />
    					<label className="input_label">
    						<span className="input_label-content">Image {character.length > 1 ? `for ${character}` : null}</span>
    					</label>
    				</span>
    				{this.state.validImage ? null : <small className="error"> Provide a valid image URL with  "jpg", "png" or "gif" </small>}  

    				
	  	      	 	<span className={nameInput}>
	  	      	 		<input className="input_field" onBlur={this.handleBlurName.bind(this)} onFocus={this.handleFocusName.bind(this)}   type="text" ref="name" />
	  	      	 		<label className="input_label">
	  	      	 			<span className="input_label-content">Your Name</span>
	  	      	 		</label>
	  	      	 	</span>

	    	 		
	  			<input className="btn-submit" type="submit" value="submit"/>
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