/* =====================================
   HERITAGEPLAY
   HARAPPAN DICE
===================================== */


let playerScore = 0;

let aiScore = 0;

let round = 1;

const WINNING_SCORE = 30;

let roundFinished = false;

let gameFinished = false;


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


/* ===============================
   ROLL DICE
================================ */

function rollHarappanDice() {

    if (
        roundFinished ||
        gameFinished
    ) {
        return;
    }


    const button =
        document.getElementById(
            "rollDiceButton"
        );


    const message =
        document.getElementById(
            "diceMessage"
        );


    const status =
        document.getElementById(
            "gameStatus"
        );


    const playerDice =
        document.getElementById(
            "playerDice"
        );


    const aiDice =
        document.getElementById(
            "aiDice"
        );


    button.disabled = true;


    message.textContent =
        "Rolling the ancient dice...";


    status.textContent =
        "The dice are being cast...";


    /*
       Small animation
    */

    playerDice.classList.add(
        "rolling"
    );

    aiDice.classList.add(
        "rolling"
    );


    setTimeout(function () {


        const playerRoll =
            Math.floor(
                Math.random() * 6
            ) + 1;


        const aiRoll =
            Math.floor(
                Math.random() * 6
            ) + 1;


        playerDice.textContent =
            diceSymbols[playerRoll];


        aiDice.textContent =
            diceSymbols[aiRoll];


        playerDice.classList.remove(
            "rolling"
        );

        aiDice.classList.remove(
            "rolling"
        );


        /*
           Determine winner
        */

        if (
            playerRoll >
            aiRoll
        ) {

            playerScore +=
                playerRoll;

            message.textContent =
                `You win the round! +${playerRoll} points`;

            status.textContent =
                `You rolled ${playerRoll}. AI rolled ${aiRoll}. You earn the round points.`;

        }


        else if (
            aiRoll >
            playerRoll
        ) {

            aiScore +=
                aiRoll;

            message.textContent =
                `AI wins the round!`;

            status.textContent =
                `You rolled ${playerRoll}. AI rolled ${aiRoll}. AI earns ${aiRoll} points.`;

        }


        else {

            /*
               Tie bonus
            */

            playerScore += 2;

            aiScore += 2;


            message.textContent =
                "⚖️ A tie! Both players receive 2 points.";

            status.textContent =
                `Both players rolled ${playerRoll}. Tie bonus awarded.`;

        }


        updateScores();


        /*
           Check winner
        */

        if (
            checkGameWinner()
        ) {

            return;

        }


        roundFinished = true;


        document.getElementById(
            "nextRoundButton"
        ).style.display =
            "block";


    }, 800);

}


/* ===============================
   NEXT ROUND
================================ */

function nextRound() {

    if (
        gameFinished
    ) {
        return;
    }


    round++;

    roundFinished = false;


    document.getElementById(
        "roundNumber"
    ).textContent =
        round;


    document.getElementById(
        "playerDice"
    ).textContent =
        "⚄";


    document.getElementById(
        "aiDice"
    ).textContent =
        "⚂";


    document.getElementById(
        "diceMessage"
    ).textContent =
        "Your turn — roll the dice.";


    document.getElementById(
        "gameStatus"
    ).textContent =
        "The next round begins.";


    document.getElementById(
        "rollDiceButton"
    ).disabled =
        false;


    document.getElementById(
        "nextRoundButton"
    ).style.display =
        "none";

}


/* ===============================
   UPDATE SCORES
================================ */

function updateScores() {

    document.getElementById(
        "playerScore"
    ).textContent =
        playerScore;


    document.getElementById(
        "aiScore"
    ).textContent =
        aiScore;


    /*
       Progress toward 30
    */

    const playerProgress =
        Math.min(
            (playerScore / WINNING_SCORE) * 100,
            100
        );


    const aiProgress =
        Math.min(
            (aiScore / WINNING_SCORE) * 100,
            100
        );


    document.getElementById(
        "playerProgress"
    ).style.width =
        playerProgress + "%";


    document.getElementById(
        "aiProgress"
    ).style.width =
        aiProgress + "%";

}


/* ===============================
   WINNER
================================ */

function checkGameWinner() {


  if (playerScore >= WINNING_SCORE) {

    finishGame(
        "🏆 You have won the Harappan Dice Challenge!"
    );

    setTimeout(function () {

        showHarappanResult(true);

    }, 700);

    return true;
} 


    if (aiScore >= WINNING_SCORE) {

    finishGame(
        "🤖 Heritage AI has won the challenge!"
    );

    setTimeout(function () {

        showHarappanResult(false);

    }, 700);

    return true;
} 

    return false;

}


/* ===============================
   FINISH GAME
================================ */

function finishGame(message) {

    gameFinished = true;

    roundFinished = true;


    document.getElementById(
        "gameStatus"
    ).textContent =
        message;


    document.getElementById(
        "diceMessage"
    ).textContent =
        "Game Complete";


    document.getElementById(
        "rollDiceButton"
    ).disabled =
        true;


    document.getElementById(
        "nextRoundButton"
    ).style.display =
        "none";

}


/* ===============================
   RESET
================================ */

function resetHarappanGame() {

    playerScore = 0;

    aiScore = 0;

    round = 1;

    roundFinished = false;

    gameFinished = false;


    document.getElementById(
        "playerScore"
    ).textContent =
        "0";


    document.getElementById(
        "aiScore"
    ).textContent =
        "0";


    document.getElementById(
        "roundNumber"
    ).textContent =
        "1";


    document.getElementById(
        "playerDice"
    ).textContent =
        "⚄";


    document.getElementById(
        "aiDice"
    ).textContent =
        "⚂";


    document.getElementById(
        "playerProgress"
    ).style.width =
        "0%";


    document.getElementById(
        "aiProgress"
    ).style.width =
        "0%";


    document.getElementById(
        "diceMessage"
    ).textContent =
        "Your turn — roll the dice.";


    document.getElementById(
        "gameStatus"
    ).textContent =
        "Roll the dice to begin the challenge.";


    document.getElementById(
        "rollDiceButton"
    ).disabled =
        false;


    document.getElementById(
        "nextRoundButton"
    ).style.display =
        "none";

} 

function showHarappanResult(won) {

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


    if (won) {

        icon.textContent = "🏆";

        title.textContent =
            "You Won!";

        message.textContent =
            "You mastered the Harappan Dice Challenge.";

    } else {

        icon.textContent = "🤖";

        title.textContent =
            "AI Victory";

        message.textContent =
            "Heritage AI won this challenge.";

    }


    modal.classList.add("show");

}


function closeResultModal() {

    document
        .getElementById("resultModal")
        .classList.remove("show");

} 