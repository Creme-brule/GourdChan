import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import authApi from '../../Data/auth-api';

class SignUpBar extends Component {
    // Setting the component's initial state
    state = {
        username: "",
        password: ""
    };

    createAccount = () => {
        authApi.create({
            username: this.state.username,
            password: this.state.password
        })
            .then((data) => {
                if(data){
                this.login(data);
                console.log(data);
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
9
    handleFormSubmit = event => {
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

    render() {

        return (
            <div>
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
            </div>
        );
    }
}

export default SignUpBar;
