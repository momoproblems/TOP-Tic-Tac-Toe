// 1) You’re going to store the gameboard as an array inside of 
// a Gameboard object, so start there! Your players are also 
// going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// 1.1) Your main goal here is to have as little global code 
// as possible. Try tucking everything away inside of a module 
// or factory. Rule of thumb: if you only ever need ONE of 
// something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them 
// with factories.

const GameBoard = () => {
    let board = ["", "", "", "", "", "", "", "", ""];
    return { board };
};

const Player = (name, marker) => {
    return { name, marker };
}

// const gameBoard = GameBoard();
const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");




const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]
const celllements = document.querySelectorAll("[data-cell]");
const gameBoard = document.getElementById('gameBoard');
let circleTurn

startGame();

function startGame() {
    circleTurn = false;
    celllements.forEach( cell => {
        cell.addEventListener('click', handleClick, {once: true});
    })

    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS
;
    console.log('clicked!');
    // Place Mark
    placeMark(cell, currentClass);
    // Check for Win
    if(checkWin(currentClass)) {
        console.log('winner!')
    }
    // Check for Draw
    // Switch Turns
    swapTurns();
    setBoardHoverClass();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    gameBoard.classList.remove(X_CLASS
    );
    gameBoard.classList.remove(O_CLASS);
    if (circleTurn) {
        gameBoard.classList.add(O_CLASS);
    }
    else {
        gameBoard.classList.add(X_CLASS
        );
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return celllements[index].classList.contains(currentClass);
        })
    });
}