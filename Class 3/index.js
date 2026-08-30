const express = require('express');
const app = express();
const port = 3000;

const users = require("./data.json");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

// Get method

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
});

// Post method

app.post("/api/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Created",
        user: newUser
    });
    
});

// Put method

app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    user.first_name = req.body.first_name ;
    user.last_name = req.body.last_name ;
    user.email = req.body.email ;

    res.json({
        message: "User Updated",
        user: user
    });
});


app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) { // findIndex() returns -1 when it can't find anything.This is the same as: 

// if (userIndex === -1) {
//         return res.status(404).json({
//             error: "User not found"
//         });
//     }

        return res.status(404).json({
            error: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1); // because The splice() syntax is: array.splice(start, deleteCount)

    res.json({
        message: "User Deleted",
        user: deletedUser[0]
    });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});