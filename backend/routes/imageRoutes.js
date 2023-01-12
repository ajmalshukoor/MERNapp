const express = require("express");
const multer = require('multer');

const {
    uploadImage,
    getImage
} = require("../controller/imageController");

const router = express.Router();

const upload = multer({dest: 'uploads/'})


router.post('/', upload.single('image'), uploadImage)
router.get('/:id', getImage)

module.exports = router