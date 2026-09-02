const express = require("express");
const app = express();

app.get(["/", "/home"], (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});


app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/services.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
}); 

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
