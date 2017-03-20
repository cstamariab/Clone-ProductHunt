import 'core-js/fn/object/assign';
import './styles/normalize.css';
import './styles/App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from './stores/ProductStore';
import Actions from './actions';

@connectToStores
class App extends React.Component {
  constructor(){
    super();
    Actions.initSession();
  }
  static getStores(){
    return [ProductStore];
  }
  static getPropsFromStores(){
    return ProductStore.getState();
  }
  render(){
    return(
      <div>
      	
      	<NavBar user={this.props.user}/>
        <HomePage  />
      </div>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));
