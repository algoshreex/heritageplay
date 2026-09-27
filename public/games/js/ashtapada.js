/* =========================================
   HERITAGEPLAY - ASHTAPADA
   Historical Reconstruction Prototype
========================================= */


/* ---------- GAME SETTINGS ---------- */

const BOARD_SIZE = 8;

const TOTAL_CELLS = 64;

const PIECES_PER_PLAYER = 4;


/*
   This is a prototype reconstruction route.

   The route moves through the board in a
   serpentine pattern:

   Row 0 → left to right
   Row 1 → right to left
   Row 2 → left to right
   etc.
*/

const path = [];

for (let row = 0; row < BOARD_SIZE; row++) {

    if (row % 2 === 0) {

        for (let col = 0; col < BOARD_SIZE; col++) {
            path.push({
                row: row,
                col: col
            });
        }

    } else {

        for (let col = BOARD_SIZE - 1; col >= 0; col--) {
            path.push({
                row: row,
                col: col
            });
        }

    }
}


/* ---------- GAME STATE ---------- */

let playerPieces = [0, 0, 0, 0];

let aiPieces = [0, 0, 0, 0];

let currentTurn = "player";

let diceValue = 0;

let selectedPiece = null;

let gameOver = false;


/* Safe positions */

const safePositions = [
    0,
    7,
    14,
    21,
    28,
    35,
    42,
    49,
    56,
    63
];


/* Dice symbols */

const diceSymbols = [
    "",
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];


/* =========================================
   INITIALIZE GAME
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    createBoard();

    renderBoard();

});


/* =========================================
   CREATE BOARD
========================================= */

function createBoard() {

    const board = document.getElementById("gameBoard");

    board.innerHTML = "";

    for (let i = 0; i < TOTAL_CELLS; i++) {

        const cell = document.createElement("div");

        cell.classList.add("board-cell");

        cell.dataset.index = i;

        /*
           Mark safe cells.
        */

        if (safePositions.includes(i)) {
            cell.classList.add("safe-cell");
        }


        /*
           Starting cell.
        */

        if (i === 0) {
            cell.classList.add("start-cell");
        }


        /*
           Destination.
        */

        if (i === TOTAL_CELLS - 1) {
            cell.classList.add("destination-cell");
        }


        board.appendChild(cell);
    }

}


/* =========================================
   RENDER BOARD
========================================= */

function renderBoard() {

    const cells = document.querySelectorAll(".board-cell");


    /*
       Clear cells.
    */

    cells.forEach(cell => {

        const pieces = cell.querySelectorAll(".piece");

        pieces.forEach(piece => piece.remove());

    });


    /*
       Draw Player pieces.
    */

    playerPieces.forEach((position, index) => {

        if (position < TOTAL_CELLS) {

            createPiece(
                position,
                "player-piece",
                index
            );

        }

    });


    /*
       Draw AI pieces.
    */

    aiPieces.forEach((position, index) => {

        if (position < TOTAL_CELLS) {

            createPiece(
                position,
                "ai-piece",
                index
            );

        }

    });


    updateCounters();

}


/* =========================================
   CREATE PIECE
========================================= */

function createPiece(position, type, pieceIndex) {

    const cell = document.querySelector(
        `.board-cell[data-index="${position}"]`
    );

    if (!cell) return;


    const piece = document.createElement("div");

    piece.classList.add(
        "piece",
        type
    );


    piece.textContent =
        type === "player-piece"
            ? "●"
            : "◆";


    piece.dataset.piece = pieceIndex;


    /*
       Only player's pieces can be selected
       during player's turn.
    */

    if (
        type === "player-piece" &&
        currentTurn === "player" &&
        diceValue > 0 &&
        !gameOver
    ) {

        const newPosition =
            playerPieces[pieceIndex] + diceValue;


        if (newPosition < TOTAL_CELLS) {

            piece.classList.add(
                "selectable-piece"
            );

            piece.addEventListener(
                "click",
                function () {

                    movePlayerPiece(pieceIndex);

                }
            );

        }

    }


    cell.appendChild(piece);

}


/* =========================================
   ROLL DICE
========================================= */

function rollDice() {

    if (
        currentTurn !== "player" ||
        gameOver
    ) {
        return;
    }


    const button =
        document.getElementById("rollButton");

    const dice =
        document.getElementById("dice");

    const message =
        document.getElementById("diceMessage");


    button.disabled = true;

    dice.classList.add("dice-rolling");

    message.textContent =
        "Rolling...";


    setTimeout(function () {

        diceValue =
            Math.floor(Math.random() * 6) + 1;


        dice.textContent =
            diceSymbols[diceValue];


        dice.classList.remove(
            "dice-rolling"
        );


        message.textContent =
            `You rolled ${diceValue}`;


        updateStatus(
            "Choose a highlighted piece."
        );


        renderBoard();


        /*
           Check if any move is possible.
        */

        const canMove =
            playerPieces.some(
                position =>
                    position + diceValue < TOTAL_CELLS
            );


        if (!canMove) {

            updateStatus(
                "No valid move. AI's turn."
            );

            setTimeout(
                aiTurn,
                1200
            );

            return;

        }


        /*
           Player must select a piece.
        */

        button.disabled = true;


    }, 600);

}


/* =========================================
   PLAYER MOVE
========================================= */

function movePlayerPiece(pieceIndex) {

    if (
        currentTurn !== "player" ||
        gameOver
    ) {
        return;
    }


    const newPosition =
        playerPieces[pieceIndex] +
        diceValue;


    if (
        newPosition >= TOTAL_CELLS
    ) {

        updateStatus(
            "That piece cannot make this move."
        );

        return;

    }


    /*
       Move piece.
    */

    playerPieces[pieceIndex] =
        newPosition;


    /*
       Capture AI piece.
    */

    captureOpponent(
        newPosition,
        "player"
    );


    /*
       Reset dice.
    */

    diceValue = 0;

    document.getElementById("dice").textContent =
        "⚄";

    document.getElementById("diceMessage").textContent =
        "AI is thinking...";


    renderBoard();


    /*
       Check winner.
    */

    if (checkWinner("player")) {
        return;
    }


    /*
       AI turn.
    */

    currentTurn = "ai";

    updateTurnUI();

    updateStatus(
        "Heritage AI is thinking..."
    );


    setTimeout(
        aiTurn,
        1200
    );

}


/* =========================================
   AI TURN
========================================= */

function aiTurn() {

    if (gameOver) return;


    currentTurn = "ai";

    updateTurnUI();


    /*
       Roll AI dice.
    */

    const aiDice =
        Math.floor(Math.random() * 6) + 1;


    document.getElementById("dice").textContent =
        diceSymbols[aiDice];


    document.getElementById("diceMessage").textContent =
        `AI rolled ${aiDice}`;


    /*
       Find valid pieces.
    */

    const validPieces = [];


    aiPieces.forEach(
        (position, index) => {

            if (
                position + aiDice <
                TOTAL_CELLS
            ) {

                validPieces.push(index);

            }

        }
    );


    /*
       No valid move.
    */

    if (validPieces.length === 0) {

        updateStatus(
            "AI has no valid move."
        );


        setTimeout(
            playerTurn,
            1000
        );

        return;

    }


    /*
       Simple AI strategy:

       Prefer the piece that is
       furthest along.
    */

    let selected =
        validPieces[0];


    validPieces.forEach(
        index => {

            if (
                aiPieces[index] >
                aiPieces[selected]
            ) {

                selected = index;

            }

        }
    );


    /*
       Move AI piece.
    */

    aiPieces[selected] += aiDice;


    /*
       Capture player.
    */

    captureOpponent(
        aiPieces[selected],
        "ai"
    );


    renderBoard();


    /*
       Check AI winner.
    */

    if (checkWinner("ai")) {
        return;
    }


    setTimeout(
        playerTurn,
        1000
    );

}


/* =========================================
   PLAYER TURN
========================================= */

function playerTurn() {

    if (gameOver) return;


    currentTurn = "player";

    diceValue = 0;


    document.getElementById("dice").textContent =
        "⚄";


    document.getElementById("diceMessage").textContent =
        "Roll the dice to continue.";


    document.getElementById("rollButton").disabled =
        false;


    updateTurnUI();

    updateStatus(
        "Your turn — roll the dice."
    );


    renderBoard();

}


/* =========================================
   CAPTURE
========================================= */

function captureOpponent(
    position,
    movingPlayer
) {


    /*
       Safe positions cannot capture.
    */

    if (
        safePositions.includes(position)
    ) {
        return;
    }


    if (movingPlayer === "player") {

        aiPieces =
            aiPieces.map(
                piecePosition => {

                    if (
                        piecePosition === position
                    ) {

                        return 0;

                    }

                    return piecePosition;

                }
            );

    } else {

        playerPieces =
            playerPieces.map(
                piecePosition => {

                    if (
                        piecePosition === position
                    ) {

                        return 0;

                    }

                    return piecePosition;

                }
            );

    }

}


/* =========================================
   CHECK WINNER
========================================= */

function checkWinner(player) {

    const pieces =
        player === "player"
            ? playerPieces
            : aiPieces;


    const winner =
        pieces.every(
            position =>
                position === TOTAL_CELLS - 1
        );


    if (!winner) {
        return false;
    }


    gameOver = true;


    document.getElementById(
        "rollButton"
    ).disabled = true;

    if (player === "player") {

    updateStatus(
        "🏆 You won the game!"
    );

    document.getElementById(
        "turnText"
    ).textContent =
        "🏆 Victory!";

    setTimeout(function () {

        showResultModal(true);

    }, 700);

} 
    else {

    updateStatus(
        "🤖 Heritage AI won this round."
    );

    document.getElementById(
        "turnText"
    ).textContent =
        "AI Victory";

    setTimeout(function () {

        showResultModal(false);

    }, 700);

}  


    return true;

}


/* =========================================
   UPDATE TURN UI
========================================= */

function updateTurnUI() {

    const turnText =
        document.getElementById("turnText");

    const turnDot =
        document.getElementById("turnDot");


    if (currentTurn === "player") {

        turnText.textContent =
            "Your Turn";

        turnDot.style.background =
            "#a0522d";

    } else {

        turnText.textContent =
            "AI Turn";

        turnDot.style.background =
            "#344c55";

    }

}


/* =========================================
   STATUS
========================================= */

function updateStatus(message) {

    document.getElementById(
        "gameStatus"
    ).textContent = message;

}


/* =========================================
   COUNTERS
========================================= */

function updateCounters() {

    const playerHome =
        playerPieces.filter(
            position =>
                position === 0
        ).length;


    const aiHome =
        aiPieces.filter(
            position =>
                position === 0
        ).length;


    document.getElementById(
        "playerHome"
    ).textContent =
        playerHome;


    document.getElementById(
        "aiHome"
    ).textContent =
        aiHome;

}


/* =========================================
   RESET GAME
========================================= */

function resetGame() {

    playerPieces =
        [0, 0, 0, 0];

    aiPieces =
        [0, 0, 0, 0];

    currentTurn =
        "player";

    diceValue =
        0;

    selectedPiece =
        null;

    gameOver =
        false;


    document.getElementById(
        "dice"
    ).textContent = "⚄";


    document.getElementById(
        "diceMessage"
    ).textContent =
        "Roll the dice to begin";


    document.getElementById(
        "rollButton"
    ).disabled = false;


    updateStatus(
        "Your turn — roll the dice."
    );


    updateTurnUI();

    renderBoard();

} 

/* =========================================
   RESULT MODAL
========================================= */

function showResultModal(
    won
) {

    const modal =
        document.getElementById(
            "resultModal"
        );

    const icon =
        document.getElementById(
            "resultIcon"
        );

    const title =
        document.getElementById(
            "resultTitle"
        );

    const message =
        document.getElementById(
            "resultMessage"
        );

    const fact =
        document.getElementById(
            "resultFact"
        );


    if (won) {

        icon.textContent = "🏆";

        title.textContent =
            "Victory!";

        message.textContent =
            "Your strategy brought all your pieces home.";

        fact.textContent =
            "Ashtapada refers to an ancient Indian 8 × 8 board-game tradition. The exact rules of its earliest forms are uncertain, so HeritagePlay presents a modern playable reconstruction.";

    } else {

        icon.textContent = "🤖";

        title.textContent =
            "AI Victory";

        message.textContent =
            "Heritage AI reached the destination first.";

        fact.textContent =
            "Ancient Indian board-game traditions developed around strategic movement on marked boards, providing inspiration for later games.";

    }


    modal.classList.add(
        "show"
    );

}


/* CLOSE MODAL */

function closeResultModal() {

    document
        .getElementById("resultModal")
        .classList.remove("show");

} 