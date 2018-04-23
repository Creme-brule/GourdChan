const authcontroller = {
  signup(req, res) {
    
  },

  signin(req, res) {
    
  },

  dashboard(req, res) {
  },

  logout(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
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
  shooby(req,res,next) {
    res.json("Login Failed.");
  },
  dooby(req,res,next) {
    res.json("loowah");
  }
};
export {authcontroller as default};
