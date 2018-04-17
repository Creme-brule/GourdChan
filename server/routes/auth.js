import express from "express";
import authController from "../controllers/authcontrollers.js";
import passport from "passport";
const router = express.Router();

router.get("/");
router.get("/signup", authController.shooby);
router.get("/dashboard", authController.LoggedIn);
router.get("/signin", authController.shooby);
router.get("/logout", authController.logout);

router.post(
  "/signup",
  function(){
  console.log("qwertyu");
  passport.authenticate("local-signup", {
    successRedirect: "/dashboard",

    failureRedirect: "/signup"
  });
}
);

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/dashboard",

    failureRedirect: "/signin"
  })
);

export default router;
