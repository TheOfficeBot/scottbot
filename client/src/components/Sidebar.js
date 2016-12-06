import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';

import { validateImage } from '../helpers/validation';
import scott from '../assets/scott_isolated.png'
import paper from '../assets/paper_fibers.png'

//console.log('LOG',validateImage(52345234) )


class Sidebar  extends Component{
	constructor(){
		super();
		this.state = {
			formData: {
				name: '',
				character: '',
				content: ''
			}
		}
	}

	onChangeName(e){
		this.setState({
			formData:{name: e.target.value} 
		})		
	}
	onChangeImage(e){
		this.setState({
			formData:{image: e.target.value} 
		})		
	}
	onChangeUrl(e){
		this.setState({
			formData:{image: e.target.value} 
		})		
	}

	handleSubmit(e){
		e.preventDefault();
		validateImage(this.state.image)
	}

	render () {
	    return (
	      <aside>
	      	 	<img src={scott} alt=""/>
	      	 	<form className="ugc-form" onSubmit={this.handleSubmit.bind(this)}>

	      	 		<input   type="text" value={this.state.formData.name} onChange={this.onChangeName.bind(this)}/>
	      	 		<input type="text"  onChange={this.onChangeImage.bind(this)} />

	      	 		   <label>Which Office Character are  You Adding?:          
				          <select value={this.state.value} onChange={this.handleChange}>
				            <option value="michael">Michael Scott</option>
				            <option value="dwight">Dwight Shrute</option>
				            <option value="jim">Jim</option>
				            <option value="stanley">Stanley</option>
			          		</select>
			        </label>
	    			<input type="submit" value="submit"/>
	      	 	</form>
	      	 	{this.state.formData.name}
	      </aside>
	    )
	}
}
export default Sidebar