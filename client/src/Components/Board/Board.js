import React from 'react';

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
            <h1>{this.props.match.params.boardname}</h1>
        )
    }
}
export default Board;