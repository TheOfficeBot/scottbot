import React, { Component } from 'react';


class Card  extends Component{
  render () {
  	const imgStyle = {
  		backgroundImage: 'url(' + this.props.deets + ')'
  	}
    return (
      <div className="card-wrap">
      		<div className="card-label"> 2 mins ago from user in channel</div>
      		<div className="stem"></div>
      		<div className="image-block" style={imgStyle}></div>
      		<p className="attribute">Submitted by: <spaan>Jackie</spaan></p>
      		<div className="reaction">
      			<div className="count">
      				2 <span>Reactions</span>
      			</div>
      			<div className="emojis">

      			</div>
      		</div>
      </div>
    )
  }
}
export default Card