import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getAPI } from '../helpers/http';
import Card from './Card';
//const socket = io();

class Activity  extends Component{
	constructor(){
		super();
		this.state ={
			cardData: ['a','b']
		}
	}

      // socket.on('message', (message) => {
      //    console.log("SOCKET ON CLIENT" )        
      // })

        componentWillMount(){
            getAPI('activity')
              .then(item =>{
                 this.setState({
                      cardData: item.data
                 })               
              })
        }

       render () {

  	const cardStream = this.state.cardData.map( (item, i)=>{
  		return <Card deets={item} key={i} />
  	})
    return (
      <section className="activity">

      		{cardStream}

      </section>
    )
  }
}
export default Activity