import axios from "axios";
const orgApi = {
  getAll: () => axios.get('/api/organization').then(results => results.data),
  getById: org => axios.get(`/api/organization/${org.id}/${org.location}`).then(results => results.data),
  create: org => axios.post('/api/organization', org).then(results => results.data),
  update: org => axios.put(`/api/organization/${org.id}`, org),
  delete: id => axios.delete(`/api/organization/${id}`)
};
export {
  orgApi as default
};
