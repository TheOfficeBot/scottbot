import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { getAPI } from '../helpers/http';
import Card from './Card';
import io from 'socket.io-client';
import _ from 'lodash';
const socket = io('http://localhost:8080')

class Activity  extends Component{
	constructor(){
		super();
		this.state ={
			cardData: ['a','b']
		}
        //socket.emit('activity', { my: 'data' });
	}



        componentWillMount(){
 
          // socket.on('activity', function (name, fn) {
          //   console.log("SOCKET ON MOUNT", name )          
          // });

            getAPI('activity')
              .then(item =>{
                //console.log( _.sortBy(item.data, [(items) => item.date]) )
                 this.setState({
                      cardData: _.sortBy(item.data, [(items) => item.date]).reverse()
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