import React, { Component } from 'react';
import { Link } from 'react-router';

class Header  extends Component{
  render () {
    return (
      <header>
      	<h1>Scott Bot</h1>
      <a className="btn-slack" href="https://slack.com/oauth/authorize?scope=commands&client_id=111745854261.110999636593"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
      		
      </header>
    )
  }
}
export default Header