import React, { Component } from 'react';
import Card from './Card';

class Activity  extends Component{
	constructor(){
		super();
		this.state ={
			memes: ['http://4.bp.blogspot.com/-UI7rLB6lnCM/Ut4M3qmtYxI/AAAAAAAACmM/Aw081dtXDr4/s1600/battlestar+gallactica.jpg',
						'http://3.bp.blogspot.com/-cUai8A-CZ00/VZNxK38WHMI/AAAAAAAAEXM/RRgE4LzpTHg/s320/bankruptcy.jpg','http://1.bp.blogspot.com/-l7d2h3FPTck/Ut4Mx_nLTVI/AAAAAAAAClU/B_BoeQiA0cA/s1600/DWIGHTMUKDUK.jpg','https://s-media-cache-ak0.pinimg.com/736x/b2/dc/04/b2dc046052086cdf52ba1067d483d0f8.jpg']
		}
	}
  render () {

  	const cardStream = this.state.memes.map( (item, i)=>{
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