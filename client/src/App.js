import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './Components/Board';
import SideBar from './Components/SideBar';
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
    signUp: false,
    authError:""
  };

  signUpInstead = () => {
    this.setState({ signUp: !this.state.signUp,
    authError:"" });
  }

  logout = () => {
    authApi.logout().then(result => result);
    this.setState({
      loggedIn: false,
      username: "",
      userId: ""
    })
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('loggedIn');
  }

  componentDidMount() {
    organizationApi.getAll().then(results => {
      console.log(results);
      const userId = sessionStorage.getItem("userId");
      const username = sessionStorage.getItem("username");
      let loggedIn = sessionStorage.getItem("loggedIn");
      if (!loggedIn) {
        loggedIn = false;
      }
      console.log("get userId" + userId + "/" + loggedIn);
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
        if(data=="Invalid login credentials"){
          this.setState({authError:data});
        }
        if (typeof data.id === "number") {
          this.userLoggedIn(data);
          console.log(data);
          this.setState({authError:""});
        }
      });
  };

  createAccount = (username, password) => {
    authApi.create({
      username,
      password
    })
      .then((data) => {
        if(data=="Username Taken"){
          this.setState({authError:data});
        }
        if (typeof data.id === "number") {
          this.userLoggedIn(data);
          console.log(data);
          this.setState({authError:""});
        }
      });
  };

  locationClick = (loc, name, id) => {
    this.setState({
      location: loc,
      locationName: name,
      locationId: id
    });
  };

  render() {
    const loginError = this.state.authError ? (<div id="loginError"><p>{this.state.authError}</p></div>):(<div></div>)
    const signBar = this.state.signUp ? (<div id="pwdError">{loginError}<LoginBar login={this.loginAccount} swap={this.signUpInstead} test={this.showID} /></div>) : (<div>{loginError}<SignupBar signup={this.createAccount} swap={this.signUpInstead} test={this.showID} /></div>);
    const loggedIn = this.state.loggedIn ? (<div className="userBox"><p>Logged in as: {this.state.username} </p>
      <button id="logoutBtn" onClick={this.logout}>LOGOUT</button>
    </div>) : (signBar)
    return (
      <Router>
        <div>
          {loggedIn}
          <SideBar list={this.state.BoardList} click={this.locationClick} />
          <Route exact path="/b/:boardName" render={(props) => <Board key={this.state.locationId} list={this.state.BoardList} location={this.state.location} locId={this.state.locationId} userId={this.state.userId} {...props} />} />
          <Route exact path="/t/:threadId" render={(props) => <Thread userId={this.state.userId} {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
