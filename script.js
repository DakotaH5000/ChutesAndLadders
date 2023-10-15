/* Get element declarations*/
    let spinnerButton = document.getElementById('spinner');
    let spinnerNum = document.getElementById('spinnerText');
    let twoPlayers = document.getElementById('2player')
    let threePlayers = document.getElementById('3player')
    let fourPlayers = document.getElementById('4player');
    let resetButton = document.getElementById('gameReset')
    let start = document.getElementById("startGame")
    let player1Pos = document.getElementById("player1Position")
    let player2Pos = document.getElementById("player2Position")
    let player3Pos = document.getElementById("player3Position")
    let player4Pos = document.getElementById("player4Position")
    let pic1 = document.getElementById("danny1")

/* Numerical function declrations */
    let playerCount = 2
    let numberSpin = () => { return Math.ceil(Math.random() * 6)}
    let currentTurn = 1
    let playerOne = 0
    let playerTwo = 0
    let playerThree = 0
    let playerFour = 0
/* Deciding game turns and order */
spinnerButton.addEventListener('click', () =>{
    result = numberSpin()
    if (playerCount === 2){
        if (currentTurn % 2 === 1){
            playerOne += result
            spinnerNum.innerHTML = "Player One got a " + result + ".";
            player1Pos.innerHTML = playerOne
            currentTurn++ 
            pic1.style.transform = playerOne;
        } else {
            playerTwo += result
            spinnerNum.innerHTML = "Player Two got a " + result + "."
            currentTurn++;
            player2Pos.innerHTML = playerTwo
        }
    } if (playerCount === 3) {
        if (currentTurn % 3 === 1){
        console.log(currentTurn)
            playerOne += result
            spinnerNum.innerHTML = "Player One got a " + result + ".";
            player1Pos.innerHTML = playerOne
            currentTurn++ ;
            console.log(currentTurn + "is player 1")
    } else if (currentTurn % 3 === 2){
            playerTwo += result;
            spinnerNum.innerHTML = "Player Two got a " + result + ".";
            player2Pos.innerHTML = playerTwo
            currentTurn++ 
            console.log(currentTurn + "is player 2")
    } 
    else {
            playerThree += result
            spinnerNum.innerHTML = "Player Three got a " + result + "."
            currentTurn++;
            player3Pos.innerHTML = playerThree
            console.log(currentTurn + "is player 3")
        }
    } if (playerCount === 4){
        if (currentTurn % 4 === 1){
            playerOne += result
            spinnerNum.innerHTML = "Player One got a " + result + ".";
            player1Pos.innerHTML = playerOne

            currentTurn++ 
        } else if (currentTurn % 4 === 2){
            playerTwo += result
            spinnerNum.innerHTML = "Player Two got a " + result + ".";
            player2Pos.innerHTML = playerTwo
            currentTurn++ 
        } else if (currentTurn % 4 === 3){
            playerThree += result
            spinnerNum.innerHTML = "Player Three got a " + result + ".";
            player3Pos.innerHTML = playerThree
            currentTurn++ 
        } else {
            playerFour += result
            spinnerNum.innerHTML = "Player Four got a " + result + ".";
            player4Pos.innerHTML = playerFour
            currentTurn++ 
        }
    }
    })
/* event listeners for players */
twoPlayers.addEventListener('click', () =>{
    playerCount = 2
    console.log(playerCount)
});
threePlayers.addEventListener('click', () =>{
    playerCount = 3
    console.log(playerCount)
});
fourPlayers.addEventListener('click', () =>{
    playerCount = 4
    console.log(playerCount)
});



 /*spinnerButton.addEventListener('click', () =>{
    result = numberSpin()
    spinnerNum.innerHTML = "You got a "+ result + "."
}) */
