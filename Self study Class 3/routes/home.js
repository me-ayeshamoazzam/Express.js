const express = require('express');
const router = express.Router();

router.use('/home/:age', (req, res, next) => { 
    const age = Number(req.params.age);

    if (age >= 18) {
        next();
    } else {
        // res.status(403).send('Access Denied');
        res.send("Access denied")
    }
});

router.get('/home/:age', (req, res) => {
    res.send("Logged in");
});

module.exports = router;