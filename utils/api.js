const EXERCISE_URL = "http://localhost:5000/exercise";
const MOVE_URL = "http://localhost:5000/move";
const AUTH_URL = "http://localhost:5000/auth";

async function authenticate ( userData) {
    const init ={
        method : "POST"
    };
    let response = {};
    if(userData.email && userData.password){
        try {
        response= await fetch(`${AUTH_URL}`, init)
        console.log("response",response);
        }
        catch (err) {
            throw err;
        }
    }
    return response;
}

async function getExerciseById( id ){
    const init = {
        method : "GET"
    };
    let exercise = {};
    try {
        exercise = await fetch(`${EXERCISE_URL}/${id}`, init);
    }
    catch(e) {
        console.log(e)
    }
    return exercise ;
}

async function getExercises( query ){
    const init = {
        method : "POST",
        body : JSON.stringify(query)
    };
    let exercises = [];
    try {
        await fetch(`${EXERCISE_URL}`,init);
    }
    catch(e) {
        console.log(e)
    }
   
    return exercises;

}

async function saveExercise( data ){
    const init = {
        method : "POST",
        body : JSON.stringify(data)
    };
    await fetch(`${EXERCISE_URL}/save`, init);
}

async function getMoveById( id ) {
    const init = {
        method : "GET"
    };
    let move = {};
    try {
        move = await fetch(`${MOVE_URL}/${id}`, init );
    }
    catch (e) {
        console.log(e);
    }

    return move;
}

async function getMoves( query ) {
    const init = {
        method : "POST"
    };
    let moves = [];
    try {
        moves = await fetch(`${MOVE_URL}`, init );
    }
    catch (e) {
        console.log(e);
    }

    return moves;
}

async function saveMove( data ){
    const init = {
        method : "POST",
        body : JSON.stringify(query)
    };
    await fetch(`${MOVE_URL}/save`, init);
}

module.exports = {
    getExerciseById,
    getExercises,
    saveExercise,
    getMoveById,
    getMoves,
    saveMove
}