'use strickt';
  
let answer
let compNumber = rand(1,10);
let res

function startGame(answer) {
    for (;answer !== null && Number(answer) !== compNumber; answer = prompt ('guess number?') ){
    if (Number(answer) !== compNumber) continue};
    
    if (Number(answer) == compNumber) {
        alert('correct')
    } else {alert('cancel') };

    console.log('CompNumber'+compNumber);   
    
}

startGame()

function rand(min,max) {
    return Math.floor(Math.random()*(max-min-1)) + min;
}
