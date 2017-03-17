import React from 'react';
import Popup from '../NavBar/Popup';

class ProductPopup extends React.Component{
	render(){
		return(
			
			<Popup {...this.props} style="product-popup" >
				<h2>Product info Here</h2>
			</Popup>
		);
	}
}
export default ProductPopup;