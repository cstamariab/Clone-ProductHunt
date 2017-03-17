import React from 'react';

class Popup extends React.Component{

	renderPopupContent(){
		return(
			<section className="popup">
				<section className="popup-wrap">
					<img  onClick={this.props.handlePopup,this.props.handleProductPopup}   src="/img/close.png" />
				</section>
				<section className={"popup-content " + this.props.style}>
					<section>{this.props.children}</section>
				</section>							
			</section>
		)
	}
	render(){
		return(
			<section>
				{
					this.props.status ? this.renderPopupContent() : ''
					
				}
			</section>
		)	
	}
}
export  default Popup;