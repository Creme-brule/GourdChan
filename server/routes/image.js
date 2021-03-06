import express from "express";
import imageController from "../controllers/imageControllers.js";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";
const config    = require(__dirname + '/../../config/amazon.js');
const albumBucketName = 'applegourd';
AWS.config.update({
  accessKeyId: config.default.awsaccess,
  secretAccessKey: config.default.awssecret,
});


const router = express.Router();
// router.post('/upload', (req, res) => {
//   console.log(req.body);
//   addPhoto(req.body);
// });

router.post("/upload/url", (req, res) => {
  const s3 = new AWS  .S3();
  const params = {  
    Bucket: albumBucketName,
    Key: req.body.filename,
    Expires: 60,
    ContentType: req.body.filetype
  };  
  let url =  s3.getSignedUrl('putObject',params)
  console.log("right before "+url); 
    res.send(url);
  });

  router.get("/:id", imageController.shooby);



export default router;

