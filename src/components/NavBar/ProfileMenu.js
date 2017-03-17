import React from 'react';


class ProfileMenu extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	showProfilenav: false
	  };
	}
	handleProfileMenu = () => {		
		if (this.state.showProfilenav) {
			this.setState({showProfilenav : false});		
		}else{
			this.setState({showProfilenav : true});		
		}	
	};
	handleClicksOutside= (e) => {
		if (e.target != this.refs.profileBtn ) {
			this.setState({showProfilenav : false});	
		}
	}

	componentWillMount() {
		window.addEventListener("click" , this.handleClicksOutside , false);
	}
	componentWillUnmount() {
		window.removeEventListener("click" , this.handleClicksOutside , false);
	}
	
	render(){
		return(
			<section className="profile-menu" > 
				<img src="/img/yo.jpg" onClick={this.handleProfileMenu}  className="profile-btn medium-avatar"  ref="profileBtn"/>
				{
					this.state.showProfilenav ?
					<nav className="profile-nav" ref="profileNav">
						<a href="#" onClick={this.props.handlePopup}>New Product</a>
						<a href="#" >My Profile</a>
						<a href="#" >Logout</a>
					</nav>
					: ''
				}
			</section>
		)
	}
}

export default ProfileMenu;