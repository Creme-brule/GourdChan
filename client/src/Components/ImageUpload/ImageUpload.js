import React from 'react';
import imageApi from '../../Data/image-api';
import "./ImageUpload.css";


class ImageUpload extends React.Component {

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
            <div className="upload">
<<<<<<< HEAD
=======
                <button onClick={this.showImage}    >SHOW</button>
                <p>
                    Upload
                </p>
>>>>>>> develop
                <form>
                    <input id="imageUpload" type="file" name="image" accept="image/*" onChange={this.handleInputChange} />
                    <button id="upload" onClick={this.upload}> Upload </button>
                </form>
            </div>
        )
    }
}


export default ImageUpload;