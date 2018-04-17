import React from 'react';

class Board extends React.Component {
    state ={
        threads: []
    }
    componentDidMount() {
        console.log("Boardmounted" + this.props.match.params.boardName);
    };

    handleThreadClick = (thread) => {
        this.setState({thread});
    }

    render() {
        return (
            <div className="Board">
                <h1>{this.props.match.params.boardName}</h1>
            </div>
        )
    }
}
export default Board;