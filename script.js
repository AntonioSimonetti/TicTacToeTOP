let playerArray = [];
let board = ["","","","","","","","",""];
let roundEnded = [];
let playerOne = 0;
let playerTwo = 0;

const playerFactory = () => {    // FACTORY FUNCTION
    const players = {
       name:"",
       type:"Human",
       id:0,
      };
    return { players };
   };
  
 let gameBoardModule = (function() {    // GAME LOGIC MODULE
    
    let gameBoard = document.querySelector(".container");
    gameBoard.addEventListener("click", playerClick, false);
    let startGame = document.querySelector(".start-game-button");
    startGame.addEventListener("click", createPlayer); 

    let index = 0;  // Assegna gli ID ai player nell array
    function createPlayer () {
    for (i = 0; playerArray.length < 2; i++ ) {
            let giocatore = playerFactory();
            giocatore.id = index;
            playerArray.push(giocatore);
            index++;
        }   
      }  
     
    let selectPlayer = ["X"];

    function playerClick(e) {  

      function computerChoise() {
         let number = Math.floor(Math.random() * 8);
         let undex = number;
         if (board[undex] === '') {
             board[undex] = 'Y';  
             }else{
             computerChoise() + console.log("retrying..");
           }; 
         };
      
      checkWinner();  
      if (e.target !== e.currentTarget) {

        roundEnded = [];
        console.log("roundended")
        let scelta = e.target.dataset.position;
        let sceltaNum = parseInt(scelta);
        console.log(sceltaNum);
        console.log(selectPlayer[0]);
        console.log(playerArray[1].name);
          if (board[sceltaNum] === '' && selectPlayer[0] === "X" && playerArray[1].name != 'A.I.') {
              board[sceltaNum] = 'X';
              selectPlayer[0] = "Y";
              console.log(board[sceltaNum]);
              console.log(board);
              console.log("cliccoepushoX")
              checkWinner();

        } else if (board[sceltaNum] === '' && selectPlayer[0] === "Y" && playerArray[1].name != 'A.I.'){
                   board[sceltaNum] = 'Y';
                   selectPlayer[0] = "X";
                   console.log(sceltaNum);
                   console.log(board);
                   checkWinner();

        } else if(playerArray[1].name = 'A.I.') {
          if (board[sceltaNum] === '' && selectPlayer[0] === "X") {
            board[sceltaNum] = 'X';
            computerChoise();
            checkWinner();
      }; 

        }else {
            console.log("try again..");
         }
       }; 
      e.stopPropagation();
   } 
  
     function checkWinner() {
          if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X' 
           || board[3] === 'X' && board[4] === 'X' && board[5] === 'X'
           || board[6] === 'X' && board[7] === 'X' && board[8] === 'X'
           || board[0] === 'X' && board[3] === 'X' && board[6] === 'X'
           || board[1] === 'X' && board[4] === 'X' && board[7] === 'X'
           || board[2] === 'X' && board[5] === 'X' && board[8] === 'X'
           || board[0] === 'X' && board[4] === 'X' && board[8] === 'X'
           || board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
                     console.log("X is the winner");
                     playerOne++ ;
                     board = ["","","","","","","","",""];        
                     roundEnded.push("X");
                     console.log(playerOne);
                     console.log(playerTwo);
                     console.log(playerArray[1].name)

                       } else if (board[0] === 'Y' && board[1] === 'Y' && board[2] === 'Y'
                               || board[3] === 'Y' && board[4] === 'Y' && board[5] === 'Y'
                               || board[6] === 'Y' && board[7] === 'Y' && board[8] === 'Y'
                               || board[0] === 'Y' && board[3] === 'Y' && board[6] === 'Y'
                               || board[1] === 'Y' && board[4] === 'Y' && board[7] === 'Y'
                               || board[2] === 'Y' && board[5] === 'Y' && board[8] === 'Y'
                               || board[0] === 'Y' && board[4] === 'Y' && board[8] === 'Y'
                               || board[2] === 'Y' && board[4] === 'Y' && board[6] === 'Y') {
                               console.log("O is the winner");  
                               playerTwo++
                               board = ["","","","","","","","",""];
                               roundEnded.push("X");

                                    } else if (!board.includes("")) {
                                      console.log(board);
                                      console.log("Draw");
                                      board = ["","","","","","","","",""];
                                      roundEnded.push("X");
                                      console.log(board);
                                  }; 
                                  if(playerOne == 3) {
                                        if (playerArray[0].id == 0) {
                                         alert (`${playerArray[0].name} is the winner!`)
                                        }
                                    playerOne = 0;
                                    playerTwo = 0;
                                  } else if (playerTwo == 3) {
                                    if (playerArray[1].id == 1) {
                                        alert (`${playerArray[1].name} is the winner!`)
                                       }                                    
                                    playerOne = 0;
                                    playerTwo = 0;
                                  }                                   
                                 return{}                           
                               };
    return {board,selectPlayer,checkWinner,playerClick};
})();

let displayController = (function(){       // DOM MANIPULATION MODULE 
    let p1name = document.querySelector(".p1");
    let p2name = document.querySelector(".p2");
    let startGame = document.querySelector(".start-game-button");
    let pointsDiv = document.querySelector(".points");
    let body = document.getElementsByTagName("BODY")[0];
    startGame.addEventListener("click", prompta);

    function prompta () {
      let chooseGame = document.createElement("div");
      chooseGame.classList.add("chooseGameDiv");
      let chooseButton = document.createElement("button");
      chooseButton.classList.add("chooseButtonOne");
      chooseButton.textContent = "VS PLAYER";
      let chooseButtonTwo = document.createElement("button");
      chooseButtonTwo.classList.add("chooseButtonTwo");
      chooseButtonTwo.textContent = "VS A.I.";
      chooseGame.appendChild(chooseButton);
      chooseGame.appendChild(chooseButtonTwo);
      body.appendChild(chooseGame);
      chooseButton.addEventListener("click", inprompt);
      startGame.style.display = "none"; 
      chooseButtonTwo.addEventListener("click", vsAi);

       function vsAi () {
        let messaggio = prompt("Player 1, please enter your name");
        if(messaggio === null) {alert("please insert a name"),inprompt()};
        if(messaggio.length >10) {alert("Maximum 10 letters"),inprompt()};
       
        p1name.textContent = messaggio.toUpperCase();
        for (const obj of playerArray) {
            if (obj.id === 0) {
              obj.name = messaggio;      
              break;
           };
        };

        p2name.textContent = "A.I.";
        for (const obj of playerArray) {
            if (obj.id === 1) {
              obj.name = "A.I.";     
              break;
            }; 
        };

        //startGame.innerHTML = "Change Names";
        //startGame.style.display = "";    
        chooseGame.style.display = "none";

        if(playerArray.length >= 1) {
          pointsDiv.style.display = "flex";
          gameBoard.style.display = "grid";
          chooseButton.style.display = "none";
          }
      }; 

        function inprompt() {

            let messaggio = prompt("Player 1, please enter your name");
            if(messaggio === null) {alert("please insert a name"),inprompt()};
            if(messaggio.length >10) {alert("Maximum 10 letters"),inprompt()};

           p1name.textContent = messaggio.toUpperCase();
           for (const obj of playerArray) {
             if (obj.id === 0) {
               obj.name = messaggio;      
               break;
              };
            };

           let messaggioDue = prompt("Player 2, please enter your name");
           if(messaggioDue === null) {alert("please insert a name"),inprompt()};
           if(messaggioDue.length >10) {alert("Maximum 10 letters"),inprompt()};

           p2name.textContent = messaggioDue.toUpperCase();
           for (const obj of playerArray) {
             if (obj.id === 1) {
               obj.name = messaggioDue;     
               break;
              }; 
            };

        //startGame.innerHTML = "Change Names";
        //startGame.style.display = "";    
        chooseGame.style.display = "none";

        if(playerArray.length >= 1) {
          pointsDiv.style.display = "flex";
          gameBoard.style.display = "grid";
          chooseButton.style.display = "none";
             };
           };
      };
      
      let gameBoard = document.querySelector(".container");
      gameBoard.addEventListener("click", applicaColore, false);

      function applicaColore(e) {
        if (e.target !== e.currentTarget) {      
            let boardIndex = e.target.dataset.position;
            let sceltaNum = parseInt(boardIndex);
            if(board[sceltaNum] == "X" && playerArray[1].name != 'A.I.') {
                e.target.style.background = "#FF003C";                
            } else if (board[sceltaNum] == "Y" && playerArray[1].name != 'A.I.') {
                e.target.style.background = "#04DAF6";           
            } else if (playerArray[1].name = 'A.I.') {
              if(board[sceltaNum] == "X") {
                e.target.style.background = "#FF003C";
               
                let gridbox = document.querySelectorAll(".grid-box");     
                for(let i = 0; i < board.length; i++) {
                  if (board[i] == "Y" ) {
                  gridbox.forEach(function (ele) {
                    if (ele.dataset.position == [i]) {
                        ele.style.background = "#04DAF6";     
                     };
                  });         
                };             
             };
                        
            }else{ 
               let p2name = document.querySelector(".p2");
               console.log(playerArray[1].name);
               playerArray[1].name = p2name.textContent;  //after each round i do not know why, p2 name become AI and broke all the game.This fix it.
               console.log(playerArray[1].name);
               console.log("I m that else");   
                      };                  
           };  
        }
        e.stopPropagation();                                                             
            return {};
       }; 

       gameBoard.addEventListener("click", updatePoints, false);
       function updatePoints () {
           let p1points = document.querySelector(".p1p");
           let p2points = document.querySelector(".p2p");
           p1points.textContent = playerOne;
           p2points.textContent = playerTwo; 
           if(roundEnded[0] == "X") {
            cleanCells();
           } 
            function cleanCells () {
                let cells = document.querySelectorAll(".grid-box");
                cells.forEach(element => {
                element.style.background = "";
                              });
                            };
                          };    
    return{};  
})();