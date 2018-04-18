import React from 'react';
import "./Board.css";


class Board extends React.Component {
    state ={
        threads: []
    }
    componentDidMount() {
        console.log("Boardmounted" + this.props.match.params.boardname);
    };

    handleThreadClick = (thread) => {
        this.setState({thread});
    }

    render() {
        return (
            <div className="Board">
                <h1>{this.props.match.params.boardname}</h1>
            </div>
        )
    }
}
export default Board;