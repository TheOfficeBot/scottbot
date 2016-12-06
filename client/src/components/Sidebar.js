import React, { Component } from 'react';
import Form from './Form';
import { validateImage } from '../helpers/validation';
import scott from '../assets/scott_isolated.png'
import paper from '../assets/paper_fibers.png'

class Sidebar  extends Component{
	constructor(){
		super();
	}
	render () {
	    return (
	      <aside>
	      	 	<img src={scott} alt=""/>
	      	 	<Form/>
	      </aside>
	    )
	}
}
export default Sidebar