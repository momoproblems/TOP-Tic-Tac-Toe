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




const x_class = 'x'
const o_class = 'o'
const celllements = document.querySelectorAll("[data-cell]");
let circleTurn

celllements.forEach( cell => {
    cell.addEventListener('click', handleClick, {once: true});
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? o_class : x_class;
    console.log('clicked!');
    // Place Mark
    placeMark(cell, currentClass);
    // Check for Win
    // Check for Draw
    // Switch Turns
    swapTurns();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn
}