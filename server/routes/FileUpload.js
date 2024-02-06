const express = require("express");
require("dotenv").config({path:"./../.env"});
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,imageReducer} = require("../controllers/fileUpload");

router.post("/localFileUpload",localFileUpload);

// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videoUpload);
// router.post("/imageReducer", imageReducer);

module.exports = router;