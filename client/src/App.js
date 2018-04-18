import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
import SideBar from './Components/SideBar';
import Splash from './Components/Splash';
//import Threads from './Components/Threads';
import BoardList from './boardlist.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    board: "gourdlife",
    loggedIn: false
  }

  componentDidMount() {
    console.log("mounted" + this.props.board);
  };


  render() {
    const board = this.state.board;
    return (
      <Router>
        <div>
          <SideBar list={BoardList}/>
          <Route exact path= "/" component={Splash}/>
          <Route path="/b/:boardname" component={Board}/>
        </div>
      </Router>
    );
  }
}

export default App;
