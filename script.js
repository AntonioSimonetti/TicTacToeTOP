// to do list
// little responsivness
// factory functions all

/* let gameBoard = (function() {

    
  
    return {
    
    };
  })(); */

// let board = ["", "", "", "", "", "", "", "", ""];
let board = ['', '', '', '', '', '', '', '', ''];

let playerOne = 0;
let playerTwo = 0;

function computerChoise() {

    let number = Math.floor(Math.random() * 8);
    let index = number;
    let selectDiv = document.querySelectorAll(".square");


    if (board[index] === '') {
        board[index] = 'O';

        selectDiv.forEach(function (ele) {
            if (ele.dataset.position == index) {
                ele.style.animation = "none";
                ele.style.background = "#04DAF6";

            }
        });
    } else if (!board.includes("")) {
        checkWinner();
        console.log("Draw");
        board = ["", "", "", "", "", "", "", "", ""];

    } else {
        computerChoise() + console.log("retrying..");
    }

    checkWinner();
    //console.log(board);
}

function checkWinner() {

    let selectDiv1 = document.querySelectorAll(".square");
    let playerOnePoints = document.getElementById("p1");
    let playerTwoPoints = document.getElementById("p2");
    let pointsContainer = document.getElementById("container");
    let body = document.getElementsByTagName("BODY")[0]
    let footer = document.querySelector(".footer");


    if (playerOne == 3) {
        let gameBo = document.getElementById("gameBoard");
        let playerWin = document.createElement("h2");
        let buttonContainer = document.createElement("div");
        gameBo.style.display = "none";
        playerWin.classList.add("winnerText");
        playerWin.textContent = "Player One is the Winner!";
        let popupDiv = document.createElement("div");
        popupDiv.classList.add("popup");
        popupDiv.textContent = "Wanna play again?";
        let containerPop = document.createElement("div");
        containerPop.classList.add("popupContainer");
        let buttonYes = document.createElement("button");
        buttonYes.classList.add("playAgainYes");
        buttonYes.textContent = "YES";
        buttonContainer.appendChild(buttonYes);
        let buttonNo = document.createElement("button");
        buttonNo.classList.add("playAgainNo");
        buttonNo.textContent = "NO";
        buttonContainer.appendChild(buttonNo);
        buttonContainer.classList.add("buttonContainer");
        popupDiv.appendChild(buttonContainer);
        body.appendChild(containerPop);
        containerPop.appendChild(popupDiv);
        pointsContainer.appendChild(playerWin);
        playerOne = 0;
        playerTwo = 0;

        function playAgain() {
            let popupContainer = document.querySelector(".popupContainer");
            let gameBo = document.getElementById("gameBoard");
            popupContainer.remove();
            gameBo.style.display = "flex";
            playerWin.remove();
            playerOnePoints.innerHTML = playerOne;
            playerTwoPoints.innerHTML = playerTwo;
        }

        let selectYes = document.querySelector(".playAgainYes");
        selectYes.addEventListener("click", playAgain);

        function farewell() {
            let popupContainer = document.querySelector(".popupContainer");
            popupContainer.remove();
            playerWin.remove();
            pointsContainer.remove();
            footer.remove();
            let mex = document.createElement("div");
            mex.classList.add("farewellMex");
            mex.textContent = "CIAO CIAO!";
            body.appendChild(mex);
        }

        let selectNo = document.querySelector(".playAgainNo");
        selectNo.addEventListener("click", farewell);




    } else if (playerTwo == 3) {
        let gameBo = document.getElementById("gameBoard");
        let playerWin = document.createElement("h2");
        let buttonContainer = document.createElement("div");
        gameBo.style.display = "none";
        playerWin.classList.add("winnerText");
        playerWin.textContent = "Player Two is the Winner!";
        let popupDiv = document.createElement("div");
        popupDiv.classList.add("popup");
        popupDiv.textContent = "Wanna play again?";
        let containerPop = document.createElement("div");
        containerPop.classList.add("popupContainer");
        let buttonYes = document.createElement("button");
        buttonYes.classList.add("playAgainYes");
        buttonYes.textContent = "YES";
        buttonContainer.appendChild(buttonYes);
        let buttonNo = document.createElement("button");
        buttonNo.classList.add("playAgainNo");
        buttonNo.textContent = "NO";
        buttonContainer.appendChild(buttonNo);
        buttonContainer.classList.add("buttonContainer");
        popupDiv.appendChild(buttonContainer);
        body.appendChild(containerPop);
        containerPop.appendChild(popupDiv);
        pointsContainer.appendChild(playerWin);
        playerOne = 0;
        playerTwo = 0;

        function playAgain() {
            let popupContainer = document.querySelector(".popupContainer");
            let gameBo = document.getElementById("gameBoard");
            popupContainer.remove();
            gameBo.style.display = "flex";
            playerWin.remove();
            playerOnePoints.innerHTML = playerOne;
            playerTwoPoints.innerHTML = playerTwo;
        }
        
        let selectYes = document.querySelector(".playAgainYes");
        selectYes.addEventListener("click", playAgain);

        function farewell() {
            let popupContainer = document.querySelector(".popupContainer");
            popupContainer.remove();
            playerWin.remove();
            pointsContainer.remove();
            footer.remove();
            let mex = document.createElement("div");
            mex.classList.add("farewellMex");
            mex.textContent = "CIAO CIAO!";
            body.appendChild(mex);
        }

        let selectNo = document.querySelector(".playAgainNo");
        selectNo.addEventListener("click", farewell);
    };

    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X'
        || board[3] === 'X' && board[4] === 'X' && board[5] === 'X'
        || board[6] === 'X' && board[7] === 'X' && board[8] === 'X'
        || board[0] === 'X' && board[3] === 'X' && board[6] === 'X'
        || board[1] === 'X' && board[4] === 'X' && board[7] === 'X'
        || board[2] === 'X' && board[5] === 'X' && board[8] === 'X'
        || board[0] === 'X' && board[4] === 'X' && board[8] === 'X'
        || board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
        console.log("X is the winner");
        playerOne++;
        console.log(playerOne);
        playerOnePoints.innerHTML = playerOne;
        // INSERT MESSAGE ON THE PAGE FOR WINNER HERE

        //let selectDiv1 = document.querySelectorAll(".square");
        selectDiv1.forEach(element => {
            element.style.background = "";
            element.style.animation = "";
        });

        board = ["", "", "", "", "", "", "", "", ""];
        console.log(board);
    } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O'
        || board[3] === 'O' && board[4] === 'O' && board[5] === 'O'
        || board[6] === 'O' && board[7] === 'O' && board[8] === 'O'
        || board[0] === 'O' && board[3] === 'O' && board[6] === 'O'
        || board[1] === 'O' && board[4] === 'O' && board[7] === 'O'
        || board[2] === 'O' && board[5] === 'O' && board[8] === 'O'
        || board[0] === 'O' && board[4] === 'O' && board[8] === 'O'
        || board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
        console.log("O is the winner");
        playerTwo++;
        playerTwoPoints.innerHTML = playerTwo;
        // INSERT MESSAGE ON THE PAGE FOR WINNER HERE

        //let selectDiv1 = document.querySelectorAll(".square");
        selectDiv1.forEach(element => {
            element.style.background = "";
            element.style.animation = "";        });
        console.log(board);

        board = ["", "", "", "", "", "", "", "", ""];
        console.log(board);
    } else if (!board.includes("")) {
        console.log(board);
        console.log("Draw");
        selectDiv1.forEach(element => {
            element.style.background = "";
            element.style.animation = "";
        });
        board = ["", "", "", "", "", "", "", "", ""];
        console.log(board);
    }
};

let gameBoard = document.querySelector("#gameBoard");
gameBoard.addEventListener("click", playerClick, false);

function playerClick(e) {
    if (e.target !== e.currentTarget) {
        let scelta = e.target.dataset.position;
        let sceltaNum = parseInt(scelta);
        if (board[sceltaNum] === '') {
            board[sceltaNum] = 'X';
            e.target.style.background = "#FF003C";
         
            
            computerChoise()
            checkWinner();
        } else {
            console.log("try again..");
        }
    }
    e.stopPropagation();
}


