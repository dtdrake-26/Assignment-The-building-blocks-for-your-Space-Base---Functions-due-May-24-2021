function countdownTimer() {
    console.log("countdownTimer Working");
   var currTime = 50
   document.getElementById("countdownStatus").innerHTML= currTime;
   currTime= currTime- 5 ;
    
   //Timer for 45
   setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},5000);
// timer for 40 
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},10000);  
// timer for 35
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},15000);
//timer for 30
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},20000);
// timer for 25
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},25000);
// timer for 20
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},30000);
//Timer for 15
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},35000);
// timer for 10
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},40000);
//timer for 5
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= currTime;
    currTime= currTime- 5 ;
},45000);
//timer for 0
setTimeout(function(){
    //stuff in here happens after time out
    document.getElementById("countdownStatus").innerHTML= "Blast Off";
    currTime= currTime- 5 ;
},50000);                
}  
function playCraps(){
    console.log("Craps game intiated");// function to check if it works 
    var die1= Math.ceil(Math.random() *6);// function for value of die1
    var die2= Math.ceil(Math.random() *6);// function for value of die2
    document.getElementById("die1res").innerHTML = die1; //displays die 1 value
    document.getElementById("die2res").innerHTML = die2; // displays die 2 value 
   var dieSum= die1 + die2;// equation to get sum of die 1 & 2
   document.getElementById("diceSum").innerHTML = dieSum;// displays sum of die 1 & 2
   if(dieSum == 7 || dieSum == 11){// function to see if you loose
    document.getElementById("CrapsStatus").innerHTML = "Craps! You Loose!";// displays if you Loose 
   }else if(die1 == die2 && die1 % 2 == 0){// function to see if you win, by only accepting double even numbers 
    document.getElementById("CrapsStatus").innerHTML = "Doubles you Win!"; // displays if you win 
   }
   else{// function to display if it is a push 
    document.getElementById("CrapsStatus").innerHTML = "You did not Loose,And you did not win, try again";
   }
   
    
}
 

