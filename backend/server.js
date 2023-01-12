require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const travelRoutes = require('./routes/travelRoutes');
const imageRoutes = require('./routes/imageRoutes');
const userRoutes = require('./routes/userRoutes');
const fs = require('fs');
const path = require('path');

const app = express();
//DONT switch positions of these middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/travelDiary', travelRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/image/:id/', express.static(path.join(__dirname, 'uploads')))
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to databse")
    app.listen(4000, () => {
        console.log('listening to port', process.env.PORT)
        console.log(path.join(__dirname, 'uploads'))
    })
})
.catch((error) => {
    console.log(error)
})

