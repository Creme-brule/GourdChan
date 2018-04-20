import React from 'react';
import "./LoginBar.css";

class LoginModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.openModal()}>Open modal</button>
                <LoginModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <form id="signin" name="signin" method="post" action="/auth/signin">

                        <label for="username"></label>
                        <input class="text" name="username" type="text" placeholder="Username" />

                        <label for="password"></label>
                        <input name="password" type="password" placeholder="Password" />


                        <button class="waves-effect waves-light btn black" id="button2" type="submit" value="Sign In">LOG IN</button>
                    </form>.
            <p><button onClick={() => this.closeModal()}>Close</button></p>
                </LoginModal>
            </div>
        )
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }
}

export default LoginModal;


