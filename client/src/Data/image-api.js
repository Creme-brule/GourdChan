import axios from "axios";

const imageApi = {
  upload: org => {
    //retrieve a temporarily available upload url then use it to make put request
    axios.post('/api/image/upload/url',{filename:org.image.name,
    filetype:org.image.type}).then(result=>{var signedUrl = result.data;
      console.log(result);
      console.log(signedUrl);
      var options = {
        headers: {
          'Content-Type': org.image.type,
        }
      };
      return axios.put(signedUrl, org.image, options);
    }).then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    });
  },
  download: org => axios.get('/api/image/:id', org).then(results => results.data),
};
export {
  imageApi as default
};
