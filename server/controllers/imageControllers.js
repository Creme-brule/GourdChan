import db from '../models';
const imageController = {
  
    LoggedIn(req, res, next) {
      if (req.isAuthenticated()) {
        res.json(req.user.id);
      } else {
        res.json(null);
      }
    },
    shooby(req,res,next) {
      res.json("doobap");
    },
    dooby(req,res,next) {
      res.json("loowah");
    }
  };
  export {imageController as default};
  