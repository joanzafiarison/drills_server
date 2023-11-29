const express = require("express");
const router = express.Router();
const { getUser } = require('../models/users');

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    res.send(`user id ${id}`);
});

module.exports = router;