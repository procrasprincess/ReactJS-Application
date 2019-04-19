import React, { Component } from 'react';
import Header from './containers/header';
import Main from './containers/main';
import Nav from './containers/nav';
import Footer from './containers/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blog: false,
      data: []
    }
  }

  render() {
    return (
        <div className="App">
          <Header/>
          <div className="MainArticle">
            <Main/>
            <Nav/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;
