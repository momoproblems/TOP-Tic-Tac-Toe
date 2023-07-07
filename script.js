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

const celllements = document.querySelectorAll("[data-cell]");

celllements.forEach( cell => {
    cell.addEventListener('click', handleClick, {once: true});
})

function handleClick() {
    console.log('clicked!');
}