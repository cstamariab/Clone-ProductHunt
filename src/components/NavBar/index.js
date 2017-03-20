import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';
import Actions from '../../actions';

class Navbar extends React.Component {
	constructor() {
	  super();
	
	  this.state = {
	  	popupStatus : false,
	  	profileMenuStatus: false
	  };
	}

    showPopup = () => {
        this.setState({popupStatus: true});
    };
    
    hidePopup = () => {
        this.setState({popupStatus: false});
    };

	handleLogout = (e) => {
		e.preventDefault();
		Actions.logout();
	}

	renderProductSearch(){
		return(
			<section className="left-side">
				<input className="product-search" type="text" placeholder="Search Product" />
			</section>
		)
	}
	renderLogo(){
		return(
			<a href="#" className="left-side" >
				<img src="/img/favicon.ico" className="navbar-logo" />
			</a>
		)
	}

	renderUser(){

		return(

			<section className="right-side">

				{
					this.props.user 
					? 
					<section>
						<span className="login-btn">
																			
							  <ProfileMenu user={this.props.user} handleLogout={this.handleLogout} showPopup={this.showPopup}/>
							
						</span>
						<PostPopup user={this.props.user} status={this.state.popupStatus} hidePopup={this.hidePopup} />
						
					</section>
					:
					<section>						
						<a href="#" onClick={this.showPopup}  className="login-btn">Login </a>						
						<LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup} />
					</section>
				}
			</section>						
		)
	}
	render(){
		return(
			<section>
				<section className="navbar">
					{this.renderLogo()}
					{this.renderProductSearch()}					
					{this.renderUser()}
				</section>				
			</section>
		)
	}
}

export default Navbar;