const mongoose = require('mongoose');
const imageModel = require('../model/imageModel')

//UPLOAD IMAGE
const uploadImage = async (req, res) => {
    const imgUrl = req.file.path
    const {item_id} = req.body
    let emptyFields = [];
    
    if(!item_id){
        emptyFields.push('item_id')
    }
    if(!imgUrl){
        emptyFields.push('imgUrl')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }
    
    try{
        const image = await imageModel.create({imgUrl, item_id})
        res.status(200).json(image)
        console.log()
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

// GET IMAGE
const getImage = async (req, res) =>{ 
    const item_id = req.params.id

    const images = await imageModel.find({item_id}).sort({createdAt: -1})
    console.log(images)
    try{
        if(images.length > 0){
            res.status(200).json(images)
        }
    }
    catch(err){
        res.status(400).json({err:"No items to show!"})
    }
}

module.exports = {
    uploadImage,
    getImage
}