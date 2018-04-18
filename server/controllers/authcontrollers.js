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
      res.json("wooh");
    } else {
      res.json("bleh");
    }
  },
  shooby(req,res,next) {
    res.json("doobap");
  },
  dooby(req,res,next) {
    res.json("loowah");
  }
};
export {authcontroller as default};
