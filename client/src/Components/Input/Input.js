import React from 'react';
import "./Input.css";
import imageApi from '../../Data/image-api';

class Input extends React.Component {
    state = {
        image: ""
    }
    showImage = () => {
        console.log(this.state.image);
        console.log(this.state.image.name);
    }
    upload = (event) => {
        event.preventDefault();
        console.log(this.state.image);
        if(!this.state.image){
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
                this.props.submit();
            });
        });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.files[0];
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <form className="Input" id="Input">
                <input id="imageUpload" className="upload" type="file" name="image" accept="image/*" onChange={this.handleInputChange} />
                <input type="text" className="title" name="title" placeholder="Title" value={this.props.titleValue} onChange={this.props.change} required={this.props.required}/>
                <textarea className="textbox" name="text" onChange={this.props.change} value={this.props.textValue} placeholder={"Post in " + this.props.board}required/>
                <button id="postButton" onClick={this.upload}> Post </button>
            </form>
        )
        
    }
}

export default Input;