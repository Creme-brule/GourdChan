import React from 'react';

class Thread extends React.Component {
    state ={
        posts: []
    }
    componentDidMount() {
        console.log("Boardmounted" + this.props.match.params.threadId);
    };

    handleThreadClick = (thread) => {
        this.setState({thread});
    }

    render() {
        return (
            <div className="Board">
                <h1>{this.props.match.params.threadId}</h1>
            </div>
        )
    }
}
export default Thread;