import React from 'react';
import imageApi from '../../Data/image-api';

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
        imageApi.geturl({
            image: this.state.image,
            imageName: this.state.image.name
        }).then(data => {
            console.log("\n\nIMAGEUPLOAD:");
            console.log(data);
            imageApi.upload(this.state.image, data).then(results => {
                console.log("GOAL: ");
                console.log(results)
            });
        });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.files[0];
        console.log(value);
        console.log(value.name);
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="upload">
                <button onClick={this.showImage}    >SHOW</button>

                <p>
                    Upload
        </p>
                <form>
                    <input id="imageUpload" type="file" name="image" accept="image/*" onChange={this.handleInputChange} />
                    <button id="upload" onClick={this.upload}> UPLOAD </button>
                </form>
            </div>
        )
    }
}


export default ImageUpload;