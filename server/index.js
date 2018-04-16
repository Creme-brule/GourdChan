import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import session from "express-session";
import passport from "passport";
import strategy from "../config/passport/passport.js"
export default path => {
  // Create Instance of Express
  const app = express();
  var models = require("./models");
  // Run Morgan for Logging
  app.use(logger("dev"));
  app.use(bodyParser.json());
  //Passport Setup
  app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  ); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  app.use(express.static(`${path}/client`));
  app.use("/api/organization", routers.organization);
  //routes
  //var authRoute = strategy(app, passport);
  //passport strategy
  require("../config/passport/passport.js")(passport, models.user);
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", (req, res) => {
    res.sendFile(`${path}/client/index.html`);
  });

  return app;
  // -------------------------------------------------
};
