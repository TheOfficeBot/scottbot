import React from "react";

class Admin extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			admin: false;
		}
	}

	//function here...when authenticated change admin to true & reroute

	render(){
		return (
			<div className="admin-login">
				<button>Administrator</button>
			</div>
			)
	}
}