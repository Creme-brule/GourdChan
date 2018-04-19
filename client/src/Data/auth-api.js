import axios from "axios";
const authApi = {
  create: org => axios.post('/auth', org).then(results => results.data),
  update: org => axios.put(`/auth/${org.id}`, org),
};
export {
  authApi as default
};
