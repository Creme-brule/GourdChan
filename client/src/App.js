import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
import SideBar from './Components/SideBar';
//import LoginBar from './Components/LoginBar';
//import SignUpBar from './Components/SignUpBar';
//import Threads from './Components/Threads';
import BoardList from './boardlist.json';
import logo from './logo.svg';
import Thread from './Components/Threads';
import organizationApi from './Data/organization-api';
import './App.css';
import authApi from './Data/auth-api';

class App extends Component {
  state = {
    board: "gourdlife",
    loggedIn: false,
    userId: "",
    username: "",
    password: "",
    BoardList: [],
    location: "",
    locationName: "",
    locationId: "",
  };
  showID = () => {
    console.log(this.state.userId);
  }
  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      this.setState({
        BoardList: results
      });
    });
  };

  userLoggedIn = (userId) => {
    this.setState({ userId })
  }

  loginAccount = () => {
    authApi.loggin({
      username: this.state.username,
      password: this.state.password
    })
      .then((data) => {
        this.userLoggedIn(data);
        console.log("user id:" + data);
      });
  };

  createAccount = () => {
    authApi.create({
      username: this.state.username,
      password: this.state.password
    })
      .then((data) => {
        if (data) {
          this.userLoggedIn(data);
          console.log("user id:" + data);
        }
      });
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 64);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  createFormSubmit = event => {
    event.preventDefault();
    if (this.state.password.length < 8) {
      alert(
        `Choose a more secure password (8 characters minimum)`
      );
    } else {
      this.createAccount();
    }

    this.setState({
      username: "",
      password: ""
    });
  };

  loginFormSubmit = event => {
    event.preventDefault();
    if (this.state.password.length < 8) {
      alert(
        `Choose a more secure password (8 characters minimum)`
      );
    } else {
      this.loginAccount();
    }

    this.setState({
      username: "",
      password: ""
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
          <div>
            <button id="sample" onClick={this.showID}>TEST</button>
          </div>
          <p>
            Sign Up
          </p>
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="User Name"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
          <p>
            Log In
        </p>
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="User Name"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
          <SideBar list={this.state.BoardList} click={this.locationClick} />
          <Route path="/b/:boardName" render={() => <Board boardName={this.state.locationName} location={this.state.location} locId={this.state.locationId} />} />
          <Route path="/t/:threadId" component={Thread} />
        </div>
      </Router>
    );
  }
}

export default App;
