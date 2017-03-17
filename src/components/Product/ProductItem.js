import React from 'react';
import ProductPopup from './ProductPopup';

class ProductItem extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      productPopupStatus : false
    };
  }
  handleProductPopup = () => {
    this.setState({productPopupStatus: !this.state.productPopupStatus})
  };
  renderUpvoteButton(){
    return(
      <div>
        <a className="upvote-button" href="#">
          <span className="fa fa-sort-asc"></span>
          <br />
          {this.props.upvote}
        </a>
      </div>
    )
  }
  renderNewWindowIcon(){
    return(
        <a className="product-item-link" href={this.props.link}>
          <span>
            <i className="fa fa-external-link"></i>
          </span>
        </a>
    )
  }
  renderProductInfo(){
    return(
      <section className="product-item-info">
        <a href="#" onClick={this.handleProductPopup}>
          <h2>{this.props.name}</h2>
        </a>
        <p>{this.props.description}</p>
        <a>
          <img className="small-avatar" src={this.props.maker.avatar}/>
        </a>        
      </section>
    )
  }
	render(){

		return(
			<li className="product-item">
        {this.renderUpvoteButton()}
        <img className="product-item-media" src={this.props.media} />
        {this.renderProductInfo()}
        {this.renderNewWindowIcon()}
        <ProductPopup status={this.state.productPopupStatus} handleProductPopup={this.handleProductPopup}/>
      </li>
		);
	}
}

export default ProductItem;