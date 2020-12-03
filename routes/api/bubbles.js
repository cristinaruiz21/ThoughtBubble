const router = require("express").Router();
const db = require("../../models");
/////// bring in fs to delete file when finished
const fs=require('fs')
const bubbleController = require("../../controllers/bubbleController");
require('dotenv').config();
//import multer and create a folder "uploads" to hold on to temp files
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

///import cloudinary and configure to your bucket access
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/mypics")
  .get(bubbleController.findAll)
  .post(bubbleController.create);


router
  .route("/:id")
  .get(bubbleController.findById)
  .put(bubbleController.update)
  .delete(bubbleController.remove);
////////create reference to img url in mongodb
router.route('/dbpic')
.post(bubbleController.create)

//////////////// use multer upload method to organize file data to readable format
router.post("/imgup", upload.single('file'),function(req,res, next){
  console.log(req.file)
  console.log(JSON.stringify(req.body))
  
  
  // picsController.create(JSON.stringify(req.body))
  // db.Pic.create(req.body)
  //     .then(pic => {
  //       console.log("***********\n"+JSON.stringify(pic))
  //       res.json(pic)})
  //     .catch(err => res.status(422).json(err));
  // console.log(JSON.stringify(req.body.info.name))

  
  ///////////use cloudinary uploader to send file to bucket  and upload response
  cloudinary.uploader.upload(req.file.path)
    .then(function (image) {
      console.log('** file uploaded to Cloudinary service');
      console.dir(image);
      ////save the file path to temp folder and delete file
      console.log(req.file.path+"\n^^^^^^^^^^^^^^")
      fs.unlink(req.file.path, err=>{if(err){console.log(err)}})
      // res.json(image.url)
      const obj={
        title:req.body.name,
        caption:req.body.caption,
        url:image.url,
      }
     
        let result= bubbleController.create(obj)
        console.log(result)
        res.json(result)
      
      // console.log(dbPost())
      
    })
    .then(function (res) {
      console.log('** photo saved');
      console.log(res)
    })
})

module.exports = router;