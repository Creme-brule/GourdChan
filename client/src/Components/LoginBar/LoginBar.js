import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import authApi from '../../Data/auth-api';



class LoginBar extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        password: ""
    };

    loginAccount = () => {
        authApi.loggin({
            username: this.state.username,
            password: this.state.password
        })
            .then((data) => {
                console.log("\n\nbleee"+data);
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

    handleFormSubmit = event => {
        event.preventDefault();
            this.loginAccount();

        this.setState({
            username: "",
            password: ""
        });
    };

    render() {

        return (
            <div>
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
            </div>
        );
    }
}

export default LoginBar;
