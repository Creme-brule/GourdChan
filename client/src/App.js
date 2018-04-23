import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './Components/Board';
import SideBar from './Components/SideBar';
import ImageUpload from './Components/ImageUpload';
import LoginBar from './Components/LoginBar';
import SignupBar from './Components/SignupBar';
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
    BoardList: [],
    location: "",
    locationName: "",
    locationId: "",
    signUp: false
  };

  signUpInstead = () => {
    this.setState({ signUp: !this.state.signUp });
  }

  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      const userId = sessionStorage.getItem("userId");
      const username = sessionStorage.getItem("username");
      let loggedIn = sessionStorage.getItem("loggedIn");
      if(!loggedIn) {
        loggedIn = false;
      }
      console.log("get userId" + userId +"/" + loggedIn);
      this.setState({
        username,
        loggedIn,
        userId,
        BoardList: results
      });
    });
  };

  userLoggedIn = (data) => {
    sessionStorage.setItem("userId", data.id);
    sessionStorage.setItem("username", data.name)
    sessionStorage.setItem("loggedIn", true);
    this.setState({
      username: data.name,
      userId: data.id,
      loggedIn: true
    })
  }

  loginAccount = (username, password) => {
    authApi.loggin({
      username,
      password
    })
      .then((data) => {
        console.log(data);
        if (typeof data.id === "number") {
          this.userLoggedIn(data);
          console.log("login");
          console.log(data);
        }
      });
  };

  createAccount = (username, password) => {
    authApi.create({
      username,
      password
    })
      .then((data) => {
        console.log(data);
        if (typeof data.id === "number") {
          this.userLoggedIn(data);
          console.log("login");
          console.log(data);
        }
      });
  };

  handleFileChange = event => {
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

  locationClick = (loc, name, id) => {
    console.log(loc, name, id);
    this.setState({
      location: loc,
      locationName: name,
      locationId: id
    });
  };

  render() {
    const signBar = this.state.signUp ? (<LoginBar login={this.loginAccount} swap={this.signUpInstead} test={this.showID} />) : (<SignupBar signup={this.createAccount} swap={this.signUpInstead} test={this.showID} />);
    const loggedIn = this.state.loggedIn ? (<div className="userBox">Logged in as: {this.state.username}</div>) : (signBar)
    return (
      <Router>  
        <div>
          <ImageUpload />
          {loggedIn}
          <SideBar list={this.state.BoardList} click={this.locationClick} />
          <Route exact path="/b/:boardName" render={(props) => <Board key={this.state.locationId} list={this.state.BoardList} location={this.state.location} locId={this.state.locationId} userId={this.state.userId} {...props}/>} />
          <Route exact path="/t/:threadId" render={(props) => <Thread userId={this.state.userId} {...props}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
