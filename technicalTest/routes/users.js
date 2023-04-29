const express = require("express")
const router = express.Router()
const  Controller  = require('../controllers/userController')
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, "./uploads/")
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
});

const upload = multer({storage : storage})

router.post('/register',upload.single("profile_image"), Controller.userRegister)

module.exports = router