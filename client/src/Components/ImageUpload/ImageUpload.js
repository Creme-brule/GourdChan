import React from 'react';
import imageApi from '../../Data/image-api';

class ImageUpload extends React.Component {

    state={
        image:""
    }
    showImage = () => {
        console.log(this.state.image);
    }
    upload = (event) => {
        event.preventDefault();
        console.log(this.state.image);
        imageApi.upload({
            image: this.state.image,
          }) 
            .then((data) => {
              console.log("chickens");
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

    render (){
    return(
    <div className="upload">
        <button onClick={this.showImage}    >SHOW</button>
         
        <p>
          Upload
        </p>
        <form>
            <input id="imageUpload" type="file" name="image" accept="image/*" onChange={this.handleInputChange}/>
            <button id="upload" onClick={this.upload}> UPLOAD </button>
        </form>
    </div>
    )
    }
}


export default ImageUpload;