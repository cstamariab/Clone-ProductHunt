import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component{
  constructor(){
    super();
    this.state = {
      productList: [
        {
          id: 1,
          name: 'Github cstamariab',
          link: 'https://github.com/cstamariab',
          media: '/img/react-logo.png',
          upvote: 238,
          description: 'Code for anyone',
          maker: {
            name: "Christian",
            avatar: "/img/yo.jpg"
          }
        },
        {
          id: 2,
          name: 'Linkedin cstamariab',
          link: 'https://linkedin.com/cstamariab',
          media: '/img/react-logo.png',
          upvote: 124,
          description: 'Work for anyone',
          maker: {
            name: "Thomas",
            avatar: "/img/otro.jpg"
          }
        }
      ]
    }
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