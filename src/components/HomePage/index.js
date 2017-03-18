import React from 'react';
import ProductList from '../Product/ProductList';
import * as firebase from 'firebase';


class HomePage extends React.Component{
  constructor(){
    super();
    this.state = {
      productList: []
    }
    var config = {
      apiKey: "AIzaSyDs3yrciL4qD2KGY3dpPN6P6mz2gg56lJE",
      authDomain: "codehunt-demo-101ab.firebaseapp.com",
      databaseURL: "https://codehunt-demo-101ab.firebaseio.com/",
      storageBucket: "codehunt-demo-101ab.appspot.com",
      messagingSenderId: "323824725829"
    };
    var app = firebase.initializeApp(config);
    var database = app.database();
    
    database.ref('products').once('value', snap => {
      let products = snap.val();     
      this.setState({productList: products})
    });
  }

  render(){
    return(
      <section>
        <header>
          <img src="/img/banner-producthunt.png" width="100%" />
        </header>
        <section className="container">
          {
            this.state.productList ?

            <ProductList productList={this.state.productList} />

            : ''
          }
        </section>
      </section>
    )
  }
}

export default HomePage;