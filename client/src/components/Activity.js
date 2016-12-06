import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { VelocityComponent , VelocityTransitionGroup } from 'velocity-react';
import velocity_animate from 'velocity-animate';
import velocity_ui from 'velocity-animate/velocity.ui';
import { getAPI } from '../helpers/http';
import Card from './Card';
import io from 'socket.io-client';
import _ from 'lodash';
//const socket = io('http://localhost:8080')

class Activity  extends Component{
	constructor(){
		super();
		this.state ={
			cardData: ['a','b']
		}
        //socket.emit('activity', { my: 'data' });
	}



      componentWillMount(){

            getAPI('activity')
              .then(item =>{
                //console.log( _.sortBy(item.data, [(items) => item.date]) )
                 this.setState({
                      cardData: _.sortBy(item.data, [(items) => item.date]).reverse()
                 })               
              })
        }

        dropItem(){
          const dummy = {
            content: "http://www.pbh2.com/wordpress/wp-content/uploads/2013/05/greatest-office-gifs-ice-cream.gif",
            date: "2016-12-06T04:34:54.650Z",
            tag: "DUMMY"
          }
          this.setState({
            cardData: [ ...this.state.cardData, dummy]
          })
        }

       render () {

  	const cardStream = this.state.cardData.map( (item, i)=>{
  		return <Card deets={item} key={i} />
  	})
    return (
      <div style={{width: '100%'}}  >
          <ReactCSSTransitionGroup
              component="div"
              className="activity"
               transitionName="example"
               transitionEnterTimeout={500}
               transitionLeaveTimeout={300}>
      		{cardStream}
          </ReactCSSTransitionGroup>


          <button className="btn-temp" onClick={this.dropItem.bind(this)}>DROP</button>

      </div>
    )
  }
}
export default Activity