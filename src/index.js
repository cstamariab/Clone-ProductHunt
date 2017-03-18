import 'core-js/fn/object/assign';
import './styles/normalize.css';
import './styles/App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
      	
      	<NavBar user={false}/>
        <HomePage />
      </div>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));
