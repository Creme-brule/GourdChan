import authController from "../controllers/authcontrollers.js";

export default function(app, passport) {
  app.get("/");
  app.get("/signup", authController.signup);
  app.get("/dashboard", isLoggedIn);
  app.get("/signin", authController.signin);
  app.get("/logout", authController.logout);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      res.json("wooh");
    } else {
      res.json("bleh");
    }
  }
}
