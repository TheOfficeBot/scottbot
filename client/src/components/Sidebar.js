import React, { Component } from 'react';
import { validateImage } from '../helpers/validation';
import Form from './Form';
import scott from '../assets/scott_isolated.png'
import paper from '../assets/paper_fibers.png'

//console.log('LOG',validateImage(52345234) )


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