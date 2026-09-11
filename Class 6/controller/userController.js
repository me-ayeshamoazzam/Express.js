const User = require("../model/userModel")

// GET ALL USERS
const getUsers = async (req, res) => { 
    // async is used because we're going to wait for MongoDB to give us the data.
    try {
        const users = await User.find()

        res.status(200).json({
            success: true,
            data: users,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// GET SINGLE USER
const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// INSERT USER

const createUser = async (req,res) => {
    try {
        const { name , email, age } = req.body;
        const user = await User.create({ // User.create() uses the schema from userModel.js
            name,
            email,
            age
        })
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    createUser,
    getUsers,
    getUserById,
}
