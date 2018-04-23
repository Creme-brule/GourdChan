import axios from "axios";
const options = {
  headers: {
    'Content-Type': "",
  }
}
const imageApi = {
  upload: (file, url) => axios.put(url, file, options)
    .then(result => result).catch(err => {
      console.log(err);
      return err;
    })
  ,
  geturl: org => axios.post('/api/image/upload/url', {
    filename: org.image.name,
    filetype: org.image.type
  }).then(result => {
    const signedUrl = result.data;
    console.log("\n\nimage-api_geturl:");
    console.log(result);
    options.headers["Content-Type"] = org.image.type;
    return signedUrl;
  }),
  download: org => axios.get('/api/image/:id', org).then(results => results.data),
};
export {
  imageApi as default
};
