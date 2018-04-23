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
      res.json(response);
    } else {
      res.json(null);
    }
  },
  shooby(req, res, next) {
    res.json("Login Failed.");
  },
  dooby(req, res, next) {
    console.log("doobie");
    next();
  }
};
export { authcontroller as default };
