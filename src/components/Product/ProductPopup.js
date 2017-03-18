import React from 'react';
import Popup from '../NavBar/Popup';

class ProductPopup extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
		  	product:{
	          id: 1,
	          name: 'Github cstamariab',
	          link: 'https://github.com/cstamariab',
	          media: '/img/banner-web-development.png',
	          upvote: 238,
	          description: 'Code for anyone',
	          maker: {
	            name: "Christian",
	            avatar: "/img/yo.jpg"
	          }
	        }
	  };
	}
	renderUpvoteButton(){
	    return(
	      <section>
	        <a className="upvote-button" href="#">
	          <span className="fa fa-sort-asc"></span>
	          <br /> 
	          {this.state.product.upvote}
	        </a>
	      </section>
	    )
	}
	renderheader(){
		return(
			<header style={{backgroundImage: 'url('+this.state.product.media+')'}} >
				<section className="header-shadow">
					<h1>{this.state.product.name}</h1>
					<p>{this.state.product.description}</p>
					<section>
						{this.renderUpvoteButton()}
						<a className="getit-btn" href={this.state.product.link} target="_blank"> GET IT </a>
					</section>
				</section>
			</header>
		);
	}
	render(){
		return(
			<section>
				
				<Popup {...this.props} style="product-popup" >
					{this.renderheader()}
				</Popup>
			</section>
		);
	}
}
export default ProductPopup;