import React from 'react';
import "./LoginBar.css"

class LoginBar extends React.Component {

    state = {
        username: "",
        password: ""
    }   

    loginFormSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
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
<<<<<<< HEAD
            <p id="login">Login
 
            <div className="loginBox">
=======
            <div className="userBox">
                <p>Log In</p>
>>>>>>> develop
                
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
                    <button id="loginBtn" onClick={this.loginFormSubmit}>Submit</button>
                    <button id="signBtn" onClick={this.props.swap}>Sign in</button>                
=======
                    <button onClick={this.loginFormSubmit}>Submit</button>
                    <button onClick={this.props.swap}>SIGN UP</button>                
>>>>>>> develop
            </div>
        </p>
        )
    }
}


export default LoginBar;