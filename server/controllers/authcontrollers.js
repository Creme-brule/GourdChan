const authcontroller = {
  signup(req, res) {
    
  },

  signin(req, res) {
    
  },

  dashboard(req, res) {
    res.json("YOURE IN", {
      userName: req.user.username,
      userId: req.user.id
    });
  },

  logout(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  }
};
export default authcontroller;
