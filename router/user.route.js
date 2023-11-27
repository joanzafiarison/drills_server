const express = require("express");
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`user id ${id}`);
});

module.exports = router;