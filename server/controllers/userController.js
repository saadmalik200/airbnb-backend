const User = require('../models/User')

// module.exports = function register () {}

module.exports.register = async (req, res) => {

    try {
        
        console.log('Hello from register', req.body)
    
        await User.create(req.body)
    
    
        res.send({success: true})

    } catch (error) {
        console.log("🚀 ~ register error", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.login = async (req, res) => {

    try {
        console.log('Hello from login', req.body)

        // User.find(some object) RETURNS AN ARRAY
        // User.findONe(some object) RETURNS AN OBJECT
        const user = await User
        .findOne(req.body)
        .select('-password -__v')
    
        // const user = await User.find({
        //     email: req.body.email,
        //     password: req.body.password
        // })
        
        console.log("🚀 ~ user", user)

        if (!user) return res.send({success: false, errorId: 1})
    
        res.send({success: true, user})
    } catch (error) {
        console.log("🚀 ~ login error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.list = async (req, res) => {

    try {
        console.log('Hello from list')

        const users = await User.find().select('-password -__v')
        console.log("🚀 ~ module.exports.list= ~ users", users)
    
        // THIS IS THE RESPONSE TO THE CLIENT
        res.send({success: true, users})
    } catch (error) {
        console.log("🚀 ~ list error", error.message)

        res.send({success: false, error: error.message})
    }
   
}

module.exports.delete = async (req, res) => {

    try {
        console.log('Hello from delete', req.params)

        const deletedUser= await User.findByIdAndDelete(req.params._id)
        console.log("🚀 ~ module.exports.delete ~ deletedUser", deletedUser)

        if (!deletedUser) return res.send({success: false, errorId: 1})
       
        res.send({success: true})
    } catch (error) {
        console.log("🚀 ~ delete error", error.message)

        res.send({success: false, error: error.message})
    }
   
}
// module.exports = {register, login}