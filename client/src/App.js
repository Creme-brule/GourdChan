import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
import SideBar from './Components/SideBar';
import Thread from './Components/Threads';
import BoardList from './boardlist.json';
import organizationApi from './Data/organization-api';
import './App.css';

class App extends Component {
  state = {
    BoardList: [],
    loggedIn: false,
    userId: ""
  }

  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      this.setState({
        BoardList: results
      })
    });
  };

  handlePost(location) {

  }

  render() {
    return (
      <Router>
        <div>
          <SideBar list={this.state.BoardList}/>
          <Route path="/b/:boardName" component={Board}/>
          <Route path="t/:threadId" component={Thread}/>
        </div>
      </Router>
    );
  }
}

export default App;
