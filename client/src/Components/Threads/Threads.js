import React from 'react';
import Input from '../Input';
import organizationApi from '../../Data/organization-api';
import "./Threads.css";

class Thread extends React.Component {
    state = {
        Id: null,
        posts: [],
        parent: null,
    }
    componentDidMount() {
        console.log("Threadmounted " + this.props.match.params.threadId);
        this.loadContent();

    };

    loadContent = () => {
        console.log(this.props.match.params.threadId);
        organizationApi.getById(this.props.match.params.threadId, "thread").then((response) => {
            console.log("call");
            console.log(response);
            this.setState({
                Id: response.id,
                parent: response,
                posts: response.post
            });
            var elements = document.getElementsByClassName(".Text");
            console.log("\n\nELEMENTS");
            console.log(elements);
        });

    };

    render() {
        return (
            <div className="Thread">
                <h1>{this.props.match.params.threadId}</h1>
                <Input board="thread" model={"post"} required={false} boardId={null} threadId={this.state.Id} load={this.loadContent} op={this.props.userId} />
                {
                    (this.state.parent) ?
                        <div className="Parent">
                            {(this.state.parent.image === null) ? null : <img src={this.state.parent.image.image_url} alt={this.state.parent.image.id} />}
                            <p className="Id">{this.state.parent.id}</p>
                            <p className="Title">{this.state.parent.title}</p>
                            <p className="Text">{this.state.parent.text}</p>
                            <p className="User">{this.state.parent.op.username}</p>
                        </div> :
                        <h3>Post does not exist</h3>
                }
                {
                    (this.state.posts) ?
                        <div className="Posts">
                            <p id="posts">Posts</p>
                            {this.state.posts.map(post => (
                                <div key={post.id}>
                                    {(post.image === null) ? null : <img src={post.image.image_url} alt={post.image.id} />}
                                        <p className="ThreadId">{post.id}</p>
                                        <p className="Title">{post.title}</p>
                                        <p className="Text">{post.text}</p>
                                        <p className="User">{post.op.username}</p>
                                </div>
                            ))}
                        </div> :
                        <h3>No Posts</h3>
                }
            </div>
        )
    }
}
export default Thread;