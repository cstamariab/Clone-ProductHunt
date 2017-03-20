import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class LoginPopup extends React.Component{
	handleLogin = () => {
	    Actions.login();
	    this.props.hidePopup();
	}; 
	render(){
		return(
			<Popup {...this.props} style="login-popup" > 
				<img src="/img/react-logo.png"/>
				<h1>Login to join the comunity</h1>
				<p>CodeHunt is a community to share and geek out about the latest code </p>
				<button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
				<p>We'll never post to facebook without your permission</p>
			</Popup>
		)
	}
}
export default LoginPopup;