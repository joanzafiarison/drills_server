const express = require("express");
const router = express.Router();
const { getExerciseById, getExercises} = require("../models/exercise");


router.get('/', async (req, res) => {
    const { q } = req.body;
    let exercises =  await getExercises(q);
    //[{"id":1,"name":"mma base","sport":1,"category":1}]
    
    res.send(JSON.stringify(exercises));
});

router.get("/:id",   async (req, res) => {
    const id = req.params.id;
    let exercise = await getExerciseById(id);
    console.log('exercise ',exercise);
    res.send(JSON.stringify(exercise));
});

router.post('/save',  (req, res) => {
    const { query } = req.body;
    res.send(JSON.stringify(query));
});

module.exports = router;