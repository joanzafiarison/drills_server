const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    const { query } = req.body;
    res.send("get exercises")
});

router.get("/:id",   (req, res) => {
    const id = req.params.id;
    res.send(`get exercise id ${id}`)
});

router.post('/save',  (req, res) => {
    const { query } = req.body;
    res.send(JSON.stringify(query));
});

module.exports = router;