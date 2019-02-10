import React, { Component } from 'react';
import Home from './containers/Home/Home';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import SideBar from './containers/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <>
        <HeaderNav/>
        <SideBar/>
        <Home/>
      </>
    );
  }
}

export default App;
