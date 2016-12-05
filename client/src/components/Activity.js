import React, { Component } from 'react';
import { getAPI } from '../helpers/http';
import Card from './Card';

class Activity  extends Component{
	constructor(){
		super();
		this.state ={
			cardData: []
		}
	}

        componentWillMount(){
            getAPI('content')
              .then(item =>{
                 this.setState({
                      cardData: item.data
                 })               
              })
        }

       render () {

  	const cardStream = this.state.cardData.map( (item, i)=>{
  		return <Card deets={item} />
  	})
    return (
      <section className="activity">
      		{cardStream}
      </section>
    )
  }
}
export default Activity