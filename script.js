// gameBoard array into an object using module pattern - logic
// displayController obj module pattern - dom manipulation?
// players obj using factory functions
 
// player factory functions


// Creare oggetti (prova prima singolo) di players e fai la closure con le info che ti servono dall'oggetto esempio player.segno, player.metodo
// creare variabile player alla quale assegni il playerfactory (const player = playerFactory)
// pushare la const player nell'array globale (playerArray.push(player)) il tutto messo al servizio di un loop per creare piu' player
// usare il method pattern per mostrare tutte queste informazioni prendendole dall'array (per esempio getnames etc vanno gestiti li)

// aggiungere div/h2 con i punti e utilizzarli sia per aggiornare i punti che per pulire le celle 

// cambiare logica per pushare X e Y senza event function cosi da poter richiamare la funzione normalmenteS


let playerArray = [];

const playerFactory = () => {

    const players = {
        name:"",
        type:"Human",
        id:0,
     };
 
    return { players };

  };

   let playerOne = 0;
   let playerTwo = 0;

  
  
  let gameBoardModule = (function() {    //LOGIC HERE - gameBoard Module (logic)

    let board = ["","","","","","","","",""];

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
      if (e.target !== e.currentTarget) {
        let scelta = e.target.dataset.position;
        let sceltaNum = parseInt(scelta);
          if (board[sceltaNum] === '' && selectPlayer[0] === "X") {
              board[sceltaNum] = 'X';
              selectPlayer[0] = "Y";
       //     console.log(playerOne, playerTwo);
              checkWinner();
        } else if (board[sceltaNum] === '' && selectPlayer[0] === "Y"){
                   board[sceltaNum] = 'Y';
                   selectPlayer[0] = "X";
        //         console.log(playerOne, playerTwo);
                   checkWinner();


        } else {
            console.log("try again..");
         }
       } 
      e.stopPropagation();
     // console.table(board);
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
                     console.log("its playeronegoing"), playerOne++ ;
                     gameBoardModule.board = ["", "", "", "", "", "", "", "", ""];
                     board = ["", "", "", "", "", "", "", "", ""];
                     upadatePoints();
                     cleanCells();            
                     
                     console.log(playerOne);
                     console.log(playerTwo);
                       } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O'
                               || board[3] === 'O' && board[4] === 'O' && board[5] === 'O'
                               || board[6] === 'O' && board[7] === 'O' && board[8] === 'O'
                               || board[0] === 'O' && board[3] === 'O' && board[6] === 'O'
                               || board[1] === 'O' && board[4] === 'O' && board[7] === 'O'
                               || board[2] === 'O' && board[5] === 'O' && board[8] === 'O'
                               || board[0] === 'O' && board[4] === 'O' && board[8] === 'O'
                               || board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
                               console.log("O is the winner");  
                               playerTwo++
                               board = ["", "", "", "", "", "", "", "", ""];
                               graphicPoints();                  
                                    } else if (!board.includes("")) {
                                      console.log(board);
                                      console.log("Draw");
                                      board = ["", "", "", "", "", "", "", "", ""];
                                      console.log(board);
                                  }; 

                                  if(playerOne == 3) {
                                    console.log("playerOne is the winner, game ended")
                                  } else if (playerTwo == 3) {
                                    console.log("playerTwo is the winner, game ended")
                                  }                                   


                                  return{}
                                  

                               };

    return {board,selectPlayer,checkWinner};
})();

 //MODULO DISPLAY  
let displayController = (function(){      

    let p1name = document.querySelector(".p1");
    let p2name = document.querySelector(".p2");
    let startGame = document.querySelector(".start-game-button");
    startGame.addEventListener("click", prompta);

  

    function prompta () {

        let messaggio = prompt("Player 1, please enter your name");
        p1name.textContent = messaggio.toUpperCase();
        for (const obj of playerArray) {
            if (obj.id === 0) {
              obj.name = messaggio;      
              break;
            } 
        };

        let messaggioDue = prompt("Player 2, please enter your name");
        p2name.textContent = messaggioDue.toUpperCase();
        for (const obj of playerArray) {
            if (obj.id === 1) {
              obj.name = messaggioDue;     
              break;
            } 
        };

      }

      console.table(playerArray);

      //funzione che cambia il colore del div 
      let gameBoard = document.querySelector(".container");
      gameBoard.addEventListener("click", applicaColore, false);

      function applicaColore(e) {
        if (e.target !== e.currentTarget) {     
                     
            let boardIndex = e.target.dataset.position;
            let sceltaNum = parseInt(boardIndex);

            if(gameBoardModule.board[sceltaNum] == "X") {
                e.target.style.background = "#FF003C"; 
                console.log(sceltaNum)  
                console.log(gameBoardModule.selectPlayer);
                console.log(gameBoardModule.board);     

            } else if (gameBoardModule.board[sceltaNum] == "Y") {
                e.target.style.background = "#04DAF6";
                console.log(sceltaNum)  
                console.log(gameBoardModule.selectPlayer);
                console.log(gameBoardModule.board);      

            } else { console.log("Hi");
                     console.log(sceltaNum);
                     console.log(gameBoardModule.selectPlayer); 
                     console.log(gameBoardModule.board);     


                     
                    };  
        }
        e.stopPropagation();
                                                    
            
            return {};
    
       } 

          
    return{};

})();


function upadatePoints () {
  let p1points = document.querySelector(".p1p");
  let p2points = document.querySelector(".p2p");
  p1points.textContent = playerOne;
  p2points.textContent = playerTwo; 
}

function cleanCells () {

  let cells = document.querySelectorAll(".grid-box");
  cells.forEach(element => {
  element.style.background = "";
            });
}

                     