import React from 'react';
import Input from '../Input';
import organizationApi from '../../Data/organization-api';
import "./Threads.css";

class Thread extends React.Component {
    state ={
        posts: [],
        parent: null,
        title: "",
        text: ""
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
                parent: response,
                posts: response.post,
                title: "",
                text: ""
            });
        });
    };

    handlePostInput = event => {
        event.preventDefault();
        const body = {
            model:"post",
            title: this.state.title,
            text: this.state.text,
            boardId: null,
            threadId: this.props.match.params.threadId,
            op: this.props.userId
        }
        console.log("click" + JSON.stringify(body));
        organizationApi.create(body).then(this.loadContent());
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
            <div className="Thread">
                <h1>{this.props.match.params.threadId}</h1>
                <Input board="thread" required={false} change={this.handleInputChange} titleValue={this.state.title} textValue={this.state.text} submit={this.handlePostInput} />
                {
                    (this.state.parent) ?
                    <div className="Parent">
                            <p className="Title">{this.state.parent.title}</p>
                            <p className="Text">{this.state.parent.text}</p>
                    </div> :
                    <h3>Post does not exist</h3>
                }
                {
                    (this.state.posts) ?
                    <div className="Posts">
                    {this.state.posts.map(post => (
                         <div key={post.id}>
                            <p className="Title">{post.title}</p>
                            <p className="Text">{post.text}</p>
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