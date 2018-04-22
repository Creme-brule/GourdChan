import axios from "axios";
const imageApi = {
  upload: org => {
    const fd = new FormData();
    fd.append("upload file", org.image);
    console.log("\n\n\nfd: " + fd);
    console.log("\n\n\norg.iamge " + org.image);
    let result;
    axios.post('/api/image/upload', fd).then(results => {
      result = results.data
    });
    return result;
  },
  download: org => axios.get('/api/image/:id', org).then(results => results.data),
};
export {
  imageApi as default
};
