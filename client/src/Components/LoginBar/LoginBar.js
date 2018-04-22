import React from 'react';

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
            <div>
                <p>
                    Log In
                </p>
                
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
                    <button onClick={this.loginFormSubmit}>Submit</button>
                
            </div>
        )
    }
}


export default LoginBar;