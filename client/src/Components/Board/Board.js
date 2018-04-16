import React from 'react';

const Board = props => {
    
    componentDidMount() {
        console.log("mounted" + props.board);
    }
    render () {
        return (
            <h1>{props.board}</h1>
        )
    }
}
export default Board;