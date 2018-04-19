import axios from "axios";
const authApi = {
  create: org => axios.post('/auth/signup', org).then(results => results.data),
  loggin: org => axios.post('/auth/signin',org).then(results => results.data),
  update: org => axios.put(`/auth/${org.id}`, org),
};
export {
  authApi as default
};
