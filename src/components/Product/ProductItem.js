import React from 'react';
import ProductPopup from './ProductPopup';
import Actions from '../../actions';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';
import Upvote from './Upvote';

@connectToStores
class ProductItem extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      productPopupStatus : false
    };
  }
  static getStores(){
    return [ProductStore];
  }
  static getPropsFromStores(){
    return ProductStore.getState();
  }
  showPopUp = () => {
    this.setState({productPopupStatus: true})
  };
  hidePopup = () => {
    this.setState({productPopupStatus: false})
  };
  
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
        <a href="#" onClick={this.showPopUp}>
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
        <Upvote   {...this.props} />
        <img className="product-item-media" src={this.props.media} />
        {this.renderProductInfo()}
        {this.renderNewWindowIcon()}
        <ProductPopup 
          {...this.props} 
          status={this.state.productPopupStatus} 
          hidePopup={this.hidePopup} 
          />
      </li>
		);
	}
}

export default ProductItem;