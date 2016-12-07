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
                        <i className="ion-android-time"></i>
                        <TimeAgo date={timeStamp}/>   </div>
          		<div className="stem"></div>
          		<div className="image-block" style={imgStyle}></div>
                    <div className="card-deets">
                      <p className="attribute">{deets.user_name}<span></span></p>     
                      <p className="pill">{deets.team_domain}<span></span></p>     
                    </div>
          			
          </div>
      </VelocityComponent>
    )
  }
}
export default Card