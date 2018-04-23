import React from 'react';
import Input from '../Input';
import {Link} from 'react-router-dom';
import organizationApi from '../../Data/organization-api';
import "./Board.css";

class Board extends React.Component {
    state = {
        Id:null,
        threads: []
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
                threads: response.thread
            });
        });
    };

    render() {
        return (
            <div className="Board">
                <h1>{this.props.match.params.boardName}</h1>
                <Input board={this.props.match.params.boardName} model={"thread"} boardId={this.state.Id} threadId={null} required={true} load={this.loadContent} op={this.props.userId} />
                {
                    (this.state.threads) ? 
                    <div className="Threads">
                    <p id="threads">Threads</p><hr/>
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