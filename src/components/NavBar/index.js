import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup';
import ProfileMenu from './ProfileMenu';
class Navbar extends React.Component {
	constructor() {
	  super();
	
	  this.state = {
	  	popupStatus : false,
	  	profileMenuStatus: false
	  };
	}

	handlePopup = () => {
		this.setState({popupStatus : !this.state.popupStatus})
	};

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
																			
							  <ProfileMenu  handlePopup={this.handlePopup}/>
							
						</span>
						<PostPopup status={this.state.popupStatus} handlePopup={this.handlePopup} />
						
					</section>
					:
					<section>						
						<a href="#" onClick={this.handlePopup} className="login-btn">Login </a>						
						<LoginPopup status={this.state.popupStatus} handlePopup={this.handlePopup} />
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