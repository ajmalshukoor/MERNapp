const User = require('../model/userModel');
const jwt = require('jsonwebtoken')

//CONTROLLER STEPS
//1.Create jwt to auth bt client and server
//2.For both login and sign up try user with respective static methods
//3.Create token using the createToken function by passing user._id
//4.Response json {email, token}
//5.Catch any error messages


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.loginStatic(email, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.signupStatic(email, password)

        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser, signupUser}