import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
import SideBar from './Components/SideBar';
import Thread from './Components/Threads';
import organizationApi from './Data/organization-api';
import './App.css';

class App extends Component {
  state = {
    BoardList: [],
    location: "",
    locationName: "",
    locationId: "",
    loggedIn: false,
    userId: ""
  };

  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      this.setState({
        BoardList: results
      });
    });
  };


  locationClick = (loc, name, id) => {
    console.log(loc, id);
    this.setState({
      location: loc,
      locationName: name,
      locationId: id
    });
  };

  render() {
    return (
      <Router>
        <div>
          <SideBar list={this.state.BoardList} click={this.locationClick} />
          <Route path="/b/:boardName" render={() => <Board boardName={this.state.locationName} location={this.state.location} locId={this.state.locationId} />} />
          <Route path="/t/:threadId" component={Thread} />
        </div>
      </Router>
    );
  }
}

export default App;
