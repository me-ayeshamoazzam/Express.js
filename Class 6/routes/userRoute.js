const express = require("express")
const router = express.Router()

const {
    createUser,
    updateUser,
    getUsers,
    getUserById,
} = require("../controller/userController")

// CREATE 
router.post("/users", createUser)

// GET ALL
router.get("/users", getUsers)

// GET SINGLE USER
router.get("/users/:id", getUserById)

// UPDATE
router.put("/users/:id" , updateUser)

module.exports = express.Router