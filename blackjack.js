let isAlive=false;
let hasBlackJack=false;
let sum=0;
let cards=[];
let playerChips=[25];

function credits(){
    let newCredit;
    let creditEl=document.getElementById("credits-el");
    if (playerChips>=1){
        newCredit=playerChips;
        creditEl.textContent="Credits: $"+ newCredit;
        playerChips--;
    } else{
        creditEl.textContent="Please Insert Credit!!"
        noStart();
  };
};
function startGame(){
    credits();
    isAlive=true;
    let firstCard=getRandomNumber();
    let secondCard=getRandomNumber();
    let sumEl=document.getElementById("sum-el");
    let cardEl=document.getElementById('card-el');
    let newSumEl=document.getElementById("display-sum");

    function getRandomNumber(){
        let randomNumber = Math.floor(Math.random()*13)+1;
        if (randomNumber>=11){
            return 10
        }else if(randomNumber==1){
            return 11;
        }else {
            return randomNumber;
        };
}
    sum=firstCard+secondCard;
    let previousSum= sum;
    sumEl.textContent="Result: "+ sum +" ";


    cardEl.textContent="Cards: "+ firstCard + " & " + secondCard;

    //calling function renderGame()

    renderGame();

    newSumEl.textContent+="  " + previousSum + " | ";
    previousSum=0;

}
function renderGame(){
    let prize=100;
    let message="";
    let messageEl=document.getElementById("message-el");
    if (sum<21){
        message="Please draw another Card!"
    }else if (sum==21){
        message= "Congratulations You have a Black Jack";
        // playerChips.push(100);
        hasBlackJack=true;
    }else {
         message= "You lost";
         isAlive=false;
    }
    messageEl.textContent=message;
    console.log(message);
}

function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card= startGame();
        sum+= card;
        cards.push(card)
        renderGame();
    }
}

function noStart(){
   $("#play-btn", "#newCard-el").trigger('reset');
};









