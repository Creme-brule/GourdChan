import express from "express";
import imageController from "../controllers/imageControllers.js";
import AWS from "aws-sdk";
var albumBucketName = 'applegourd';
var bucketRegion = 'us-east-1';
var IdentityPoolId = 'us-east-1:140aaf87-9224-4c7f-8840-a260532ca084';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
}); 

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

function addPhoto(item) {
  var files = item;
  var fileName = files.name;
  var albumPhotosKey = encodeURIComponent("images") + '//';
  var photoKey = albumPhotosKey + fileName;
  s3.putObject({
    Key: photoKey,
    Body: files,
    ACL: 'public-read'
  }, function(err, data) {
    if (err) {
      return console.log('There was an error uploading your photo: ', err.message);
    }
    console.log('Successfully uploaded photo.');
    viewAlbum(folder);
  });
}

const router = express.Router();



  router.post('/upload', (req, res) =>  {
    addPhoto(req.body.image); 
  });
  router.get("/:id", imageController.shooby);

  

  export default router;

