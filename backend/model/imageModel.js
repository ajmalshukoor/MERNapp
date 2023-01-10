const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    img:{
        data: Buffer,
        contentType: String
    }
    // ,
    // item_id:{
    //     type: String,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('image', imageSchema)