import routers from "./routes";
import express from "express";
import bodyParser from "body-parser"; 
import logger from "morgan";
import session from "express-session";
import passport from "passport";  
import strategy from "../config/passport/passport.js"
import auth from "./routes/auth.js"
import models from "./models"
export default path => {
  // Create Instance of Express  
  const app = express();
  // Run Morgan for Logging
  app.use(logger("dev"));
  app.use(bodyParser.json());
  //Passport Setup
  app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true,cookie:{httpOnly:true, secure: false} })
  ); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  app.use(express.static(`${path}/client`));
  app.use("/api/organization", routers.organization);

  //routes
  strategy(passport, models.user);
  //var authRoute = auth(passport,app)/;  
  app.use("/auth",routers.auth(passport));
  
  //app.use("/auth",authRoute);
  //passport strategy

  
  
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("/", (req, res) => {
    console.log(`${path}`);
    res.sendFile(`${path}/client/index.html`);
  });

  return app;
  // -------------------------------------------------
};
