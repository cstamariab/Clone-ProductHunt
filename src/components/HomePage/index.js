import React from 'react';
import ProductList from '../Product/ProductList';
import Actions from '../../actions';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';

@connectToStores
class HomePage extends React.Component{
  constructor(){
    super();

    Actions.getProducts();
  }
  static getStores(){
    return [ProductStore];
  }
  static getPropsFromStores(){
    return ProductStore.getState();
  }
  render(){
    return(
      <section>
        <header>
          <img src="/img/banner-producthunt.png" width="100%" />
        </header>
        <section className="container">
          {
            this.props.products ?

            <ProductList  productList={this.props.products} />

            : ''
          }
        </section>
      </section>
    )
  }
}

export default HomePage;