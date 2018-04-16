import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
import SideBar from './Components/SideBar';
//import Threads from './Components/Threads';
import BoardList from './boardlist.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    board: "home",
    thread: ""
  }

  handleBoardClick = (board) => {
    this.setState({board});
  }

  handleThreadClick = (thread) => {
    this.setState({thread});
  }

  render() {
    const board = this.state.board;
    return (
      <Router>
        <SideBar boardClick={this.handleBoardClick} list={BoardList}/>
        <Route path="/b/:boardname" render={() => <Board board={this.state.board}/>}/>
      </Router>
    );
  }
}

export default App;
