import React from 'react';
import Input from '../Input';
import organizationApi from '../../Data/organization-api';
import "./Board.css";

class Board extends React.Component {
    state = {
        threads: [],
        title: "",
        text: ""
    }
    componentDidMount() {
        console.log("Boardmounted" + this.props.boardName);
        console.log(this.props);
        this.loadContent();
    };

    loadContent = () => {
        const body = {
            id: this.props.locId,
            location: "board"
        };
        console.log(body);
        organizationApi.getById(body).then((response) => {
            console.log("call");
            console.log(response);
        });
    };

    handlePostInput = event => {
        event.preventDefault();
        const body = {
            title: this.state.title,
            text: this.state.text,
            location: "thread",
            locationId: this.props.locId,
            op: this.props.userId
        }
        console.log("click" + JSON.stringify(body));
        organizationApi.create(body).then();
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="Board">
                <h1>{this.props.boardName}</h1>
                <Input board={this.props.boardName} type="board" change={this.handleInputChange} submit={this.handlePostInput} />
            </div>
        )
    }
}
export default Board;