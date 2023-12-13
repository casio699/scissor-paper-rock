 var compchoice="middlefinger";
 var playerchoice="middlefinger";
 var playerscore=0;
 var computerscore=0;
 var i=1;

 for(i=1;i<=5;i++){
    console.log("round "+ i.toString() +" of 5")
    getcomputerchoice();
    getplayerchoice();
    console.log("computer plays: "+ compchoice);
    console.log("player plays: "+ playerchoice);
    whowins();
    console.log("player score: "+playerscore.toString()+" computer score: "+computerscore.toString()) 
 }







 function getcomputerchoice(){
    var nb=Math.random()*10/3;
    if (nb<=1){
        
        return compchoice="rock"
    }
    else if (nb<=2&&nb>1){
       
        return compchoice="paper"
    }
    else if (nb<=3&&nb>2){
        
        return compchoice="scissors"
    }
    else{
        console.log("something is wrong with the computer choice algorithm")
    } 
}




function getplayerchoice(){
    playerchoice=prompt("type p for paper s for scissors or r for rocks!");
    if (playerchoice.toLowerCase()==="p"){
        return playerchoice="paper"
    }
    else if (playerchoice.toLowerCase()==="r"){
        return playerchoice="rock"
    }
    else if (playerchoice.toLowerCase()==="s"){
        return playerchoice="scissors"
    }
    else {
        console.log("wrong input or error in player choice algorithm")
    }

}



function whowins(){
    if(compchoice==="scissors"&&playerchoice==="paper"||compchoice==="rock"&&playerchoice==="scissors"||compchoice==="paper"&&playerchoice==="rock"){
        
        console.log("the computer wins!");
        return computerscore++;
    }
    else if (compchoice==="rock"&&playerchoice==="paper"||compchoice==="paper"&&playerchoice==="scissors"||compchoice==="scissors"&&playerchoice==="rock"){
        
        console.log("player wins!");
        return playerscore++;
    }
    else{
        console.log("it's a tie! or something is wrong XO")
    }
}



