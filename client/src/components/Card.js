import React, { Component } from 'react';
import { VelocityComponent , VelocityTransitionGroup } from 'velocity-react';
import velocity_animate from 'velocity-animate';
import velocity_ui from 'velocity-animate/velocity.ui';
import TimeAgo from 'react-timeago'


class Card  extends Component{
  render () {
  	const {deets} = this.props
  	const imgStyle = {
  		backgroundImage: 'url(' + deets.content + ')'
  	}

      
    const timeStamp = (deets.date)? deets.date : "2016-12-05T18:40:53.794Z"; 
    return (
      <VelocityComponent animation={{ opacity:1 }} duration={900} runOnMount={true}>
          <div className="card-wrap">
          		<div className="card-label">
                        <TimeAgo date={timeStamp}/>  by {deets.user_name} </div>
          		<div className="stem"></div>
          		<div className="image-block" style={imgStyle}></div>
          		<p className="attribute">{deets.team_domain}<span></span></p>   		
          </div>
      </VelocityComponent>
    )
  }
}
export default Card