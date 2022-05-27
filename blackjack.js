
//array-ordered list of items

let cards=[];
let sum=0;
let message="";
let isAlive=false;
let hasBlackJack=false;
let messageEl=document.getElementById("message-el");
let sumEL=document.querySelector('#sum-el');
let cardEl=document.querySelector('#card-el');

//object
let player={
 name:"Credits",
}
let playerEl=document.querySelector('#player-el');
playerEl.textContent+=player.name;

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if (randomNumber>10){
        return 10;
    }else if(randomNumber===1){
        return 11;
    }else{
        return randomNumber;
    }
}

 

 function startGame(){
      
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum= firstCard+secondCard;
    renderGame();  
    
}
    function endGame(){
       messageEl.textContent="Please insert credit or Refresh the Page";
       alert("You lost all your Credits :( ,restarting game");
       window.location.reload(true);
        
    }
let chips=10;
let j=1;
let chipsEl=document.getElementById("chips-el")

function renderGame(){ 


    if(j<=chips){
        chips--;
    }else if(j>chips){
        return endGame();
    }

    chipsEl.textContent="$ "+ chips;


       
    hasBlackJack=false;
    cardEl.textContent="Cards: "
    
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+= " " + cards[i]
        console.log(cards[i])
    }
    sumEL.textContent="Sum: "+ sum;

        if(sum<=20){
            message="Please Draw a new card?"
                     
        } else if (sum === 21){
            message="Congratualtions you have a Black Jack \n You Won: $20";
            chips+=20;
            hasBlackJack=true;
        }else {
            message="Sorry You Lost! \n Hit Play to Continue Playing";
           
            isAlive=false;
        };

    

   
    
    messageEl.textContent= message;
   

    
}

function newCard(){
    if(isAlive==true && hasBlackJack==false){
    console.log("drawing New Card")
       let card=getRandomCard();
       sum+=card;
       cards.push(card)
       renderGame();
    }
};




