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
const cellElements = document.querySelectorAll("[data-cell]");
const gameBoard = document.getElementById('gameBoard');
const restartButton = document.getElementById('restartButton')
const winningMessageText = document.querySelector('[data-winning-message-text]');
const winningMessageDiv = document.querySelector('.winning-message');
const gameBoardBlur = document.querySelector('.game-board-blur');
let circleTurn

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach( cell => {
        cell.addEventListener('click', handleClick, {once: true});
    })

    setBoardHoverClass();
    winningMessageDiv.classList.remove('show');

    gameBoardBlur.classList.remove('show');
    cellElements.forEach( cell => {
        cell.classList.remove(X_CLASS) || cell.classList.remove(O_CLASS);
    })
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS
;
    placeMark(cell, currentClass);
    
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = 'Draw!';
    } else {
        winningMessageText.innerText = `${circleTurn? "O's": "X's"} Wins!`
    }
    winningMessageDiv.classList.add('show');
    gameBoardBlur.classList.add('show');
}

function isDraw() {
    return [...cellElements].every( cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    gameBoard.classList.remove(X_CLASS);
    gameBoard.classList.remove(O_CLASS);
    if (circleTurn) {
        gameBoard.classList.add(O_CLASS);
    } else {
        gameBoard.classList.add(X_CLASS
        );
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    });
}