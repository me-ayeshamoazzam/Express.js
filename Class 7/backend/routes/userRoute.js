const express = require("express")
const router = express.Router()

const {
    createUser,
    getUsers,
    getUserById,
    updateUser, 
    deleteUser    
} = require("../controller/userController") 

// CREATE 
router.post("/users", createUser)

// GET ALL
router.get("/users", getUsers)

// GET SINGLE USER
router.get("/users/:id", getUserById)

// UPDATE 
router.put("/users/:id", updateUser)

// DELETE
router.delete("/users/:id", deleteUser)

module.exports = router