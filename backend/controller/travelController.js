const travelModel = require('../model/travelmodel');
const mongoose = require('mongoose');

// GET
const getTravels = async (req, res) =>{
    const user_id = req.user._id

    const travels = await travelModel.find({user_id}).sort({createdAt: -1})
    try{
        if(travels.length > 0){
            res.status(200).json(travels)
        }
    }
    catch(err){
        res.status(400).json({err:"No items to show!"})
    }
}

// GET one
const getOneTravel = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "No such travels"})
    }
    try{
       const  travel = await travelModel.findById(id)
       res.status(200).json(travel)
    }
    catch(err){
        console.log(err)
    }
}

// POST 
const postTravel = async (req, res) =>{
    let imgUrl
    if(req.file){
        imgUrl = req.file.path
    }
    if(!req.file){
        imgUrl = 'uploads\\default.png'
    }

    const {name, description, date} = req.body

    let emptyFields = [];
    
    if(!name){
        emptyFields.push('name')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(!date){
        emptyFields.push('date')
    }
    if(!imgUrl){
        emptyFields.push('imgUrl')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }
    
    try{
        const user_id = req.user._id
        const travel = await travelModel.create({name, description, date, imgUrl, user_id})
        res.status(200).json(travel)
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

// PATCH
const patchTravel = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such travels"})
    }
    try{
       const  travel = await travelModel.findOneAndUpdate({_id: id}, {...req.body})
       if(!travel){
        return res.status(400).json({error: "Could not update"})
       }
       res.status(200).json(travel)
    }
    catch(err){
        console.log(err)
    }
}

// DELETE
const deleteTravel = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such travels"})
    }
    try{
        const  travel = await travelModel.findOneAndDelete({_id: id})
        if(!travel){
         return res.status(400).json({error: "Could not delete"})
        }
        res.status(200).json(travel)
     }
     catch(err){
         console.log(err)
     }
}


module.exports = {
    getTravels,
    getOneTravel,
    postTravel,
    patchTravel,
    deleteTravel,
}