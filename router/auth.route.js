const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    const { userData } = req.body;
    res.send(JSON.stringify(userData));
})

router.post("/login", (req, res) => {
    const { userData } = req.body;
    res.send(JSON.stringify(userData));
})

module.exports = router;