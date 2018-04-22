import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Board from './Components/Board';
//import Posts from './Components/Posts';
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
    BoardList: [],
    location: "",
    locationName: "",
    locationId: "",
    signUp: false
  };

  signUpInstead = () => {
    this.setState({ signUp: !this.state.signUp });
  }

  showID = () => {
    console.log(this.state.userId);
  }

  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      const userId = sessionStorage.getItem("userId");
      let loggedIn = sessionStorage.getItem("loggedIn");
      if(!loggedIn) {
        loggedIn = false;
      }
      console.log("get userId" + userId +"/" + loggedIn);
      this.setState({
        loggedIn,
        userId,
        BoardList: results
      });
    });
  };

  userLoggedIn = (userId) => {
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("loggedIn", true);
    this.setState({
      userId,
      loggedIn: true
    })
  }

  loginAccount = (username, password) => {
    authApi.loggin({
      username,
      password
    })
      .then((data) => {
        this.userLoggedIn(data);
        console.log("user id:" + data);
      });
  };

  createAccount = (username, password) => {
    authApi.create({
      username,
      password
    })
      .then((data) => {
        if (data) {
          this.userLoggedIn(data);
          console.log("user id:" + data);
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
    const signBar = this.state.signUp ? (<LoginBar login={this.loginAccount} />) : (<SignupBar signup={this.createAccount} />);
    const loggedIn = this.state.loggedIn ? (<div></div>) : (signBar)
    return (
      <Router>
        <div>
          <ImageUpload />
          {loggedIn}
          <button id="reg" onClick={this.signUpInstead}>SIGN IN/UP</button>
          <button onClick={this.showID}> TEST ID </button>
          <SideBar list={this.state.BoardList} click={this.locationClick} />
          <Route exact path="/b/:boardName" render={(props) => <Board key={this.state.locationId} list={this.state.BoardList} location={this.state.location} locId={this.state.locationId} userId={this.state.userId} {...props}/>} />
          <Route exact path="/t/:threadId" render={(props) => <Thread userId={this.state.userId} {...props}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
