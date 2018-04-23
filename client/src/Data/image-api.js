import axios from "axios";

const imageApi = {
  upload: (url,file, options) => axios.put(url, file, options)
    .then(result => result).catch(err => err)
  ,
  geturl: org => axios.post('/api/image/upload/url', {
    filename: org.image.name,
    filetype: org.image.type
  }).then(result => {
    const signedUrl = result.data;
    console.log("\n\nimage-api_geturl:");
    console.log(result);
    const data = {
      url: signedUrl,
      type: org.image.type
    }
    return data;
  }),
  download: org => axios.get('/api/image/:id', org).then(results => results.data),
};
export {
  imageApi as default
};
