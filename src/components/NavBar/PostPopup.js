import React from 'react';

import Popup from './Popup';
import Actions from '../../actions';
class PostPopup extends React.Component{
	handlePost = () =>{
		let product = {
			name: this.refs.name.value,
			description: this.refs.description.value,
			link: this.refs.link.value,
			media: this.refs.media.value,
			upvote: 0 ,
			maker: {
			  name: this.props.user.name,
			  avatar: this.props.user.avatar
			}
		}

		Actions.addProduct(product)
		this.props.hidePopup();
	};
	render(){
		return(
			<Popup {...this.props} style="post-popup" hidePopup={this.props.hidePopup} >				
					<header className="post-header"> Post a new product</header>
					<section>
						<table>
							<tbody>
								<tr>
									<td>Name</td>
									<td><input placeholder="Enter product name" type="text" ref="name"/></td>
								</tr>
								<tr>
									<td>Description</td>
									<td><input placeholder="Enter product Description" type="text" ref="description" /></td>
								</tr>
								<tr>
									<td>Link</td>
									<td><input placeholder="http://www..." type="text" ref="link" /></td>
								</tr>
								<tr>
									<td>Media</td>
									<td><input placeholder="direct link to img" type="text" ref="media" /></td>
								</tr>
							</tbody>
						</table>					
					</section>
					<footer className="post-footer">
						<button onClick={this.handlePost} className="post-btn" > Hunt it ! </button>
					</footer>			
			</Popup>
		)
	}
}
export default PostPopup;