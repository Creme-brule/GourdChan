import React from 'react';
import "./SignupBar.css"

class SignupBar extends React.Component {

    state = {
        username: "",
        password: ""
    }

    //how come can't pass handleInputChange down from App.js

    createFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.password.length < 4) {
          alert(
            `Choose a more secure password (4 characters minimum)`
          );
        } else {
          this.props.signup(this.state.username, this.state.password);
        }
      };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
        <p id="signup">Sign In
            <div className="signBox">
                    <input
                        value={this.state.username}
                        name="username"
                        id="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="User Name"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        id="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
<<<<<<< HEAD
                    <button id="loginBtn" onClick={this.createFormSubmit}>Submit</button>
                    <button id="signBtn" onClick={this.props.swap}>Sign in</button>
=======
                    <button onClick={this.createFormSubmit}>Submit</button>
                    <button onClick={this.props.swap}>LOG IN</button>
>>>>>>> develop
                    {/* <button onClick={this.props.signup(this.state.username,this.state.password)}>Submit</button> */}
                
            </div>
            </p>
        )
    }
}


export default SignupBar;