import axios from "axios";
const imageApi = {
  upload: org => axios.post('/api/image/upload', org).then(results => results.data),
  download: org => axios.get('/api/image/:id',org).then(results => results.data),
};
export {
  imageApi as default
};
