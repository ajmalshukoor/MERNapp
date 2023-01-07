require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/travelRoutes');

const app = express();

//DONT switch positions of these middleware
app.use(express.json())
app.use((req, res, next) => next())
app.use('/api/travelDiary', routes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to databse")
    app.listen(4000, () => {
        console.log('listening to port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

