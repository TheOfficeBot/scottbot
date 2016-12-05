import React, { Component } from 'react';


class Card  extends Component{
  render () {
  	const {deets} = this.props
  	const imgStyle = {
  		backgroundImage: 'url(' + deets.uri + ')'
  	}
    return (
      <div className="card-wrap">
      		<div className="card-label"> 2 mins ago from user in channel</div>
      		<div className="stem"></div>
      		<div className="image-block" style={imgStyle}></div>
      		<p className="attribute">Submitted by: <span>{deets.name}</span></p>
      	{/* <div className="reaction">
      			<div className="count">
      				2 <span>Reactions</span>
      			</div>
      			<div className="emojis">

      			</div>
      		</div> */}
      		
      </div>
    )
  }
}
export default Card