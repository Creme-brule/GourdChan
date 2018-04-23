import axios from "axios";
const orgApi = {
  getAll: () => axios.get('/api/organization').then(results => results.data),
  getById: (id,model) => axios.get(`/api/organization/${id}/${model}`).then(results => results.data),
  create: org => axios.post('/api/organization', org).then(results => results.data),
  upload: org => axios.post('/api/organization/upload', org).then(results => results.data),
  delete: id => axios.delete(`/api/organization/${id}`)
};
export {
  orgApi as default
};
