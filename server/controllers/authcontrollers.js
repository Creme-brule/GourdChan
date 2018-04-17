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

  LoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
      res.json("wooh");
    } else {
      res.json("bleh");
    }
  },
  shooby = function(req,res,next) {
    res.json("doobap");
  }

};
export default authcontroller;
