import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component{
	handlePost = () =>{
		
	};
	render(){
		return(
			<Popup {...this.props} style="post-popup" >
				<header className="post-header">Post a new product</header>
				<section>
					<table>
						<tbody>
							<tr>
								<td>Name</td>
								<td><input placeholder="Enter product name" type="text" /></td>
							</tr>
							<tr>
								<td>Description</td>
								<td><input placeholder="Enter product Description" type="text" /></td>
							</tr>
							<tr>
								<td>Link</td>
								<td><input placeholder="http://www..." type="text" /></td>
							</tr>
							<tr>
								<td>Media</td>
								<td><input placeholder="direct link to img" type="text" /></td>
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