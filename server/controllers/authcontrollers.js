const authcontroller = {
  signup(req, res) {

  },

  signin(req, res) {

  },

  dashboard(req, res) {
  },

  logout(req, res) {
    req.session.destroy(function (err) {
      res.redirect("/");        
    });
  },

  LoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      const response = {
        id: req.user.id,
        name: req.user.username
      }
      console.log("\n\nloggedIN response\n");
      console.log(response);
      res.json(response);
    } else {
      res.json(null);
    }
  },
  userTaken(req, res, next) {
    res.json("Username Taken");
  },
  loginError(req, res, next) {
    res.json("Invalid login credentials");
  }
};
export { authcontroller as default };
