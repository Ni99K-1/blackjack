let isAlive=false;
let hasBlackJack=false;
let sum=0;
let cards=[];
let playerChips=10;

function credits(){
    let newCredit=0;
    let creditEl=document.getElementById("credits-el");
    if (playerChips>=1){
        playerChips-=1;
        newCredit=playerChips;
        creditEl.textContent="Credits: $"+ newCredit;
        // creditEl.textContent="Credits: $"+ playerChips;
        // console.log(playerChips);
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

    // for(i=0;i<cards.length;i++){
    //    console.log[i];
    // }

    cardEl.textContent="Cards: "+ firstCard + " & " +secondCard;

    //calling function renderGame()

    renderGame();

    newSumEl.textContent+="  " + previousSum + " | ";
    previousSum=0;

}
function renderGame(){

    let message="";
    let messageEl=document.getElementById("message-el");

    if (sum<21){
        message="Please draw another Card!"
    }else if (sum==21){
        
        message= "Congratulations You have a Black Jack";
        credits.push(100)
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
        sum+= card + "+" ;
        cards.push(card)
        renderGame();
    }
}

function noStart(){
   $("#play-btn, #newCard-el").trigger('reset');
};





















//    let hasSolvedChallenge=false;
//    let hasHintsLeft= true;

//    function showSolution(){
//        if (hasSolvedChallenge==true && hasHintsLeft==false){
//            console.log("Congratulations Challenge has been solved")
//        }else if(hasHintsLeft==true && hasSolvedChallenge==false){
//            console.log("want to use your hint")
//        } else {
//                console.log("showing the solution.....")
//        }
//    }

//    console.log(showSolution())



//1,1,2,3,5

// const number = parseInt(prompt('Enter the number2 of terms:'));
// let n1=1, n2=1 , nextTerm;

// console.log('Fibonnaci Series:');

// for(let i=1;i<=number;i++){
//     console.log(n1);
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
// }

// let newState;
// let newCardEl=document.querySelector("#sum-el","#card-el");
// function newCard(){
//     newState=sum;
//     newCardEl.innerContent+=newState;
//     let sumEl.textContent+=" ";
//     sum=0;
//     console.log(sum)
// }
// let numberN=1;
// let nextNumber=1;
// let temp
// for(let i=1;i<=numberN;i++){
//     temp=numberN+nextNumber;
//     numberN=nextNumber;
//     nextNumber=temp;
    
// }console.log(temp);