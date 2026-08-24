const express = require('express');
const app = express();
const port = 3000;

const users = require("./data.json")
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Getting all users
app.get("/api/users", (req, res)=> {
    res.json(users)
})

// Getting single user
app.get("/api/users/:id", (req,res) => {
    const id = Number(req.paramas.id)
    const user = users.find((user) => user.id === id)
    if(!user){
        return res.status(404).json({
            error: "User not found"
        })
    }
    res.json(user)
})

// Post method

app.post("/api/users", (req,res) =>{
    const newUser = {
        id: user.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    users.push(newUser)
    res.status(201).json({
        message: "User Created",
        user: newUser,
    })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
