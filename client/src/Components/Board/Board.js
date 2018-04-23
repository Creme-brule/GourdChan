import React from 'react';
import Input from '../Input';
import {Link} from 'react-router-dom';
import organizationApi from '../../Data/organization-api';
import "./Board.css";

class Board extends React.Component {
    state = {
        Id:null,
        threads: [],
        title: "",
        text: ""
    }
    componentDidMount() {
        console.log("Boardmounted" + this.props.match.params.boardName);
        console.log(this.props);
        this.loadContent();
    }

    loadContent = () => {
        organizationApi.getById(this.props.match.params.boardName, "board").then((response) => {
            console.log("call");
            console.log(response.thread);
            this.setState({
                Id: response.id,
                threads: response.thread,
                title: "",
                text: ""
            });
        });
    };

    handlePostInput = event => {
        event.preventDefault();
        const body = {
            model: "thread",
            title: this.state.title,
            text: this.state.text,
            boardId: this.state.Id,
            threadId: null,
            op: this.props.userId
        }
        console.log("click" + JSON.stringify(body));
        organizationApi.create(body).then(()=>this.loadContent());
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
                <h1>{this.props.match.params.boardName}</h1>
                <Input board={this.props.match.params.boardName} required={true} titleValue={this.state.title} textValue={this.state.text} change={this.handleInputChange} submit={this.handlePostInput} />
                {
                    (this.state.threads) ? 
                    <div className="Threads">
                    {this.state.threads.map(thread => (
                         <Link key={thread.id} to={'/t/'+thread.id}>
                            <p className="Title">{thread.title}</p>
                            <p className="Text">{thread.text}</p>
                        </Link>
                    ))}
                    </div>:
                    <h3>No threads</h3>
                }
            </div>
        )
    }
}
export default Board;