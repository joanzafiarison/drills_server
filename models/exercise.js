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

Interface Categories {
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
        exercise = await query(
            `SELECT em.exercise_id, em.move_id, em.pos, em.type, e.name ,m.name AS moveName, m.desc, m.attachment, m.level FROM exercisemoves AS em
            LEFT JOIN exercises AS e ON em.exercise_id = e.id
            LEFT JOIN moves AS m ON em.move_id = m.id
            WHERE exercise_id = ${id}
            ORDER BY pos ASC`
        );
    } catch (err) {
        throw err;
    }
    return exercise;
}

async function getExercises(q) {

    const EXERCISE_KEY = {
        "category":"CATEGORIES",
        "sport":"SPORTS"
    };

    let exercises = [];
    let queryString = "";
    let i = 0;
    for ( let k of Object.keys(q) ) {
        i++;
        //console.log(k);
        //console.log('ex', EXERCISE_KEY[k]);
        if( EXERCISE_KEY[k] ) {
            let attr = await query(`SELECT * FROM ${EXERCISE_KEY[k]} WHERE name = '${q[k]}'`);
            let id = attr[0].id;
            queryString += ` ${k} = '${id}' `
            //si Erreur ne rien mettre
            // ou balancer une erreur?
        }
        else {
            queryString += ` ${k} = '${q[k]}'`;
        }
        if(i < Object.keys(q).length){
            queryString += " and "
        }
    }
    console.log("qs ",queryString);
    
    try {
        exercises = await query(`SELECT * FROM exercises WHERE ${queryString}`);
    } catch(err) {
        throw err;
    }
    return exercises;
}

async function saveExercise(data) {
    /*
    "exercise_id": 1,
        "move_id": 1,
        "pos": 1,
        "type": "warming",
        "name": "mma base",
        "moveName": "jab",
        "desc": "basic strike",
        "attachment": "/asset/jab",
        "level": 1 */
    try {
        //check si cela existe? nom de l'exercise, et id des exercises
        // Exercise
        //ExerciseMoves
        let insertion = await query(`INSERT INTO exercises ('${data.name}', '${data.sport}' , '${data.category}') VALUES ( name, sport, category )`)
        console.log(insertion)
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