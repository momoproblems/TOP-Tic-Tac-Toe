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

const gameBoard = GameBoard();
const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

// 1.2) DisplayController module (an object to control the flow of the game itself)
// 1.2.1) The module should be responsible for rendering the
// gameboard onto the webpage, and handling the visual
// changes when a player makes their move.

const DisplayController = (() => {

    const renderBoard = () => {
        const board = document.querySelector(".board");
        board.innerHTML = "";
        gameBoard.board.forEach((element, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-index", index);
            cell.textContent = element;
            board.appendChild(cell);
        });
    };

    const renderMessage = (message) => {
        const messageContainer = document.querySelector(".message");
        messageContainer.textContent = message;
    };

    const renderScore = (score) => {
        const scoreContainer = document.querySelector(".score");
        scoreContainer.textContent = score;
    };

    const renderResetButton = () => {
        const resetButton = document.querySelector(".reset");
        resetButton.style.display = "block";
    };

    const renderStartButton = () => {
        const startButton = document.querySelector(".start");
        startButton.style.display = "block";
    };

    const renderPlayer = (player) => {
        const playerContainer = document.querySelector(".player");
        playerContainer.textContent = player;
    };

    const renderPlayers = () => {
        const player1 = document.querySelector(".player1");
        const player2 = document.querySelector(".player2");
        player1.textContent = game.player1.name;
        player2.textContent = game.player2.name;
    };

    const renderGame = () => {
        renderBoard();
        renderPlayers();
        renderPlayer(game.currentPlayer.name);
        renderMessage(game.message);
        renderScore(game.score);
    };

    const renderGameEnd = () => {
        renderBoard();
        renderMessage(game.message);
        renderScore(game.score);
        renderResetButton();
    };

    const renderGameStart = () => {
        renderStartButton();
    };

    const renderGameReset = () => {
        renderBoard();
        renderPlayers();
        renderPlayer(game.currentPlayer.name);
        renderMessage(game.message);
        renderScore(game.score);
    };

    const renderGameRestart = () => {
        renderBoard();
        renderPlayers();
        renderPlayer(game.currentPlayer.name);
        renderMessage(game.message);
        renderScore(game.score);
        renderResetButton();
    };

    return {
        renderGame,
        renderGameEnd,
        renderGameStart,
        renderGameReset,
        renderGameRestart
    };
}
)();

// 1.2.2) DisplayController should also keep track of whose turn it
// is, and be able to display some sort of message when the
// game ends (ie: “Congratulations Player 1, you’ve won!” or
// “Boooo Player 2, you’re a loser.”)

// 1.2.3) DisplayController might be a good place to start
// for the actual gameplay logic as well. Try having one of
// the modules control the gameflow, and call functions from
// the other modules when needed. You can then expand this
// to include DOM manipulation if you feel comfortable, or
// try breaking it into even more modules if you don’t.

// 1.2.4) Keep in mind that the player should be able to