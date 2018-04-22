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
      res.json(req.user.id);
    } else {
      res.json(null);
    }
  },
  shooby(req,res,next) {
    res.json("Failed to log in.");
  },
  dooby(req,res,next) {
    res.json("loowah");
  }
};
export {authcontroller as default};
