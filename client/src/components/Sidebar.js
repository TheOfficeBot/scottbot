import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import { validateImage } from '../helpers/validation';
import { postAPI } from '../helpers/http';
import scott from '../assets/scott_isolated.png'
import paper from '../assets/paper_fibers.png'

//console.log('LOG',validateImage(52345234) )


class Sidebar  extends Component{
	constructor(){
		super();
		this.state = {
			formName: '',
			formImage: '',
			formChar: ''
		}
	}

	onChangeName(e){
		this.setState({
			formName: e.target.value
		})		
	}
	onChangeImage(e){
		this.setState({
			formImage: e.target.value
		})		
	}
	onChangeChar(e){
		this.setState({
			formChar: e.target.value
		})		
	}

	handleSubmit(e){
		e.preventDefault();
		//validateImage(this.state.image)
		postAPI({name: this.state.formName, character: this.state.formChar, image: this.state.formImage})
			.then(resp=>{
				console.log(resp )		
			})
	}

	render () {
	    return (
	      <aside>
	      	 	<img src={scott} alt=""/>
	      	 	<form className="ugc-form" onSubmit={this.handleSubmit.bind(this)}>

	      	 		<input   type="text" value={this.state.formName} onChange={this.onChangeName.bind(this)}/>
	      	 		<input type="text"  value={this.state.formImage} onChange={this.onChangeImage.bind(this)} />

	      	 		   <label>Which Office Character are  You Adding?:          
				          <select value={this.state.formChar} onChange={this.onChangeChar.bind(this)}>
				            <option value="michael">Michael Scott</option>
				            <option value="dwight">Dwight Shrute</option>
				            <option value="jim">Jim</option>
				            <option value="stanley">Stanley</option>
			          		</select>
			        </label>
	    			<input type="submit" value="submit"/>
	      	 	</form>

	      </aside>
	    )
	}
}
export default Sidebar