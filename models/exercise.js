const query = require("../models/connexion").query;
/*
Interface Exercises {
    name : string
    sport : number
    type : number
    level :number
}

Interface ExerciseMoves {
    pos : number 
    move_id : number
    duration : number
    reps : number
    type : string // WARM - TRAIN - STRETCH
}

Interface Sports {
    name : string
    desc : string
}

Interface SportMuscles {
    sport_id :number
    muscle_id :number
    intensity : number
}
*/

async function getExerciseById(id) {
    let exercise = {}
    try {
        exercise = await query(`SELECT * FROM exercises WHERE id =${id}`);
    } catch (err) {
        throw err;
    }
    return exercise;
}

async function getExercises(query) {
    let exercises = [];
    let queryString = "";
    try {
        exercises = await query(`SELECT * FROM exercises WHERE ${queryString}`);
    } catch(err) {
        throw err;
    }
}

async function saveExercise(data) {
    try {
        await query(`INSERT INTO exercises () VALUES ()`)
    } catch(err) {
        throw err;
    }
}

async function deleteExercise(id){
    try {
        await query(`DELETE exercises WHERE id =${id}`);
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getExerciseById,
    getExercises,
    saveExercise,
    deleteExercise
}