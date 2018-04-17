import express from "express";
import authController from "../controllers/authcontrollers.js";
import passport from "passport";
const router = express.Router();

  router.get("/");
  router.get("/signup",authController.shooby);
  router.get("/dashboard", authController.isLoggedIn);
  router.get("/signin", authController.shooby);
  router.get("/logout", authController.logout);

  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  router.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  
  export default router;

// export default function(app, passport) {
//   app.get("/");
//   app.get("/signup",shooby);
//   app.get("/dashboard", isLoggedIn);
//   app.get("/signin", shooby);
//   app.get("/logout", authController.logout);

//   app.post(
//     "/signup",
//     passport.authenticate("local-signup", {
//       successRedirect: "/dashboard",

//       failureRedirect: "/signup"
//     })
//   );

//   app.post(
//     "/signin",
//     passport.authenticate("local-signin", {
//       successRedirect: "/dashboard",

//       failureRedirect: "/signin"
//     })
//   );

//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//       res.json("wooh");
//     } else {
//       res.json("bleh");
//     }
//   }

//   function shooby(req,res,next) {
//     res.json("doobap");
//   }
// }
