import React from 'react';
import "./Input.css";
import imageApi from '../../Data/image-api';
import organizationApi from '../../Data/organization-api';

class Input extends React.Component {
    state = {
        image: "",
        title: "",
        text: "",
        threadId: null,
        postId: null
    }
    showImage = () => {
        console.log(this.state.image);
        console.log(this.state.image.name);
    }
    upload = (event) => {
        event.preventDefault();
        console.log(this.state.image);
        if(!this.state.image){
            this.handlePostInput(null);
            this.setState({
                image: "",
                title: "",
                text: ""
            });
            return;
        }
        imageApi.geturl({
            image: this.state.image,
            imageName: this.state.image.name
        }).then(data => {
            console.log("\n\nIMAGEUPLOAD:");
            console.log(data);
            const options = {
                headers: {
                    'Content-Type': data.type,
                }
            }
            imageApi.upload(data.url, this.state.image, options).then(results => {
                console.log("GOAL: ");
                console.log(results)
                const longurl = results.config.url;
                const i = longurl.indexOf("?");
                const url = longurl.substring(0, i);
                console.log(url);
                const body = {
                    url
                }
                organizationApi.upload(body).then((result)=> {
                    console.log("upload result");
                    console.log(result)
                    this.handlePostInput(result.id);
                    this.setState({
                        image: "",
                        title: "",
                        text: ""
                    });
                });
                
            });
        });
    }

    handlePostInput = (result) => {
        const body = {
            model: this.props.model,
            title: this.state.title,
            text: this.state.text,
            boardId: this.props.boardId,
            threadId: this.props.threadId,  
            op: this.props.op,
            imageId: result
        }
        console.log("click" + JSON.stringify(body));
        organizationApi.create(body).then(()=>this.props.load());
    };

    handleFileChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.files[0];
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <form className="Input" id="Input">
                <input id="imageUpload" className="upload" type="file" name="image" accept="image/*" onChange={this.handleFileChange} />
                <input type="text" className="title" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} required={this.props.required}/>
                <textarea className="textbox" name="text" onChange={this.handleInputChange} value={this.state.text} placeholder={"Post in " + this.props.board} required/>
                <button id="postButton" onClick={this.upload}> Post </button>
            </form>
        )
        
    }
}

export default Input;