import express from "express";
import authController from "../controllers/authcontrollers.js";
const router = express.Router();
export default function (passport) {

  router.get("/",authController.dooby);
  router.get("/signup", authController.shooby);
  router.get("/dashboard", authController.LoggedIn);
  router.get("/signin", authController.shooby);
  router.post("/logout",authController.logout);

  // router.post(
  //   "/signup",
  //   function () {
  //     console.log('plew')
  //     passport.authenticate("local-signup", {
  //       successRedirect: "/dashboard",

  //       failureRedirect: "/signup"
  //     });
  //   }
  // );

  router.post('/signup', (req, res) => passport.authenticate('local-signup', { 
    successRedirect: '/auth/dashboard', 
    failureRedirect: '/auth/signup', })(req, res));

  router.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/auth/dashboard",

      failureRedirect: "/auth/signin"
    })
  );
  return router;
}
