 //variable declarations...
 let compchoice="middlefinger";
 let playerchoice="middlefinger";
 let playerscore=0;
 let compscore=0;
 let winner="no one wins ERROR!"
 

 const result = document.getElementById("result"); //fetch element
 //buttons...




 const scissorsBtn = document.getElementById("scissorsBtn");
 scissorsBtn.addEventListener("click", () => {
   console.log("Player plays: Scissors");
   playerchoice = "scissors";
   checkscoreandplay();
 });
 
 const paperBtn = document.getElementById("paperBtn");
 paperBtn.addEventListener("click", () => {
   console.log("Player plays: Paper");
   playerchoice = "paper";
   checkscoreandplay();
 });
 
 const rockBtn = document.getElementById("rockBtn");
 rockBtn.addEventListener("click", () => {
   console.log("Player plays: Rock");
   playerchoice = "rock";
   checkscoreandplay();
 });
 
 


 // functions...
function reset(){
    playerscore = 0;
    compscore = 0;
    result.textContent = " "; // Clear the result message
    updateResult();

}

 function checkscoreandplay(){
    if( playerscore<5 && compscore<5 ) {
        playRound();}
   else if( playerscore >= 5 || compscore >= 5 ){
    
        if(playerscore>compscore){
           alert("player wins!");
        }
        else if(playerscore<compscore){
            alert("computer wins!")
        }
        reset();
    }
    else{alert("problem!")}
 }


function playRound(){
    getComputerChoice();
    whoWins();
    updateResult();
}



 function getComputerChoice(){
    var nb=Math.random()*10/3;
    if (nb<=1){
        console.log("computer chooses: Rock")
        return compchoice="rock"
    }
    else if (nb<=2&&nb>1){
        console.log("computer chooses: Paper")
        return compchoice="paper"
    }
    else if (nb<=3&&nb>2){
        console.log("computer chooses: Scissors")
        return compchoice="scissors"
    }
    else{
        console.log("something is wrong with the computer choice algorithm")
    } 
}


function whoWins(){
    if( compchoice==="scissors"&&playerchoice==="paper"||
        compchoice==="rock"&&playerchoice==="scissors"||
        compchoice==="paper"&&playerchoice==="rock"){
        
       winner="the computer wins!";
        return compscore++;
    }
    else if (compchoice==="rock"&&playerchoice==="paper"||
            compchoice==="paper"&&playerchoice==="scissors"||
            compchoice==="scissors"&&playerchoice==="rock"){
        
        winner="player wins!";
        return playerscore++;
    }
    else if(compchoice===playerchoice){
       winner="it's a tie!"  
    }
    else{
        winner="Something's Wrong Ma Negga!!!"
    }
}
function updateResult() {
   console.log("Updating result...");
   result.innerHTML = `
     <p>Player plays: ${playerchoice}</p>
     <p>Computer plays: ${compchoice}</p>
     <p>${winner}</p>
     <p>Player score: ${playerscore}</p>
     <p>Computer score: ${compscore}</p>
   `;
 }

