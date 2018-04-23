const authcontroller = {
  signup(req, res) {

  },

  signin(req, res) {

  },

  dashboard(req, res) {
  },

  logout(req, res) {
    console.log("\n\n\nfirst sess");
    console.log(req.session);
    req.session.destroy(function (err) {
      console.log("\n\n\nsecond sess");
      console.log("\n\nbleh");
      console.log(req.session);
      res.redirect("/");        
    });
    // req.session.destroy(err => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("\n\nSECOND REQ\n\n");
    //     console.log(req);
    //     res.redirect("/");
    //   }
    // });
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
    res.json("Username Taken.");
  },
  loginError(req, res, next) {
    res.json("Invalid login credentials");
  }
};
export { authcontroller as default };
