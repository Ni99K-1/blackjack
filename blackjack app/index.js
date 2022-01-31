// let firstCard=11;
// let secondCard=10;
// let sum = firstCard + secondCard + 1;

// if(sum<21){
//     console.log("Do you want to draw a new card ")
// } else if (sum===21){
//     console.log("hurray you've have a Black Jack!! WON")
// }else  {
//     console.log("Sorry You Lost!!!")
// }

// let age =12;

// if (age >= 20){
//     console.log("You Can enter 😃")
// }else {
//     console.log("You Cannot Enter! 🖕")
// }

// let age=101
// if (age<100){
//     console.log("Not Eligible");
// }else if (age===100){
//     console.log("Here is your birthday card from the king")
// }else {
//     console.log("You have already got your Card")
// }

//Bubble sort algorithm


// function bubbleSort(array){
//  for(let i = 0; i<array.length-1;i++){
//      for(let j=0; j<array.length-1-i;j++){
//          if (array[j]>array[j+1]){
//          [array[j], array[j+1]]=[array[j+1],array[j]]
//          console.log(array[j+1])
//          }
//      }
//  }
//  return array;
// }
// console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,3,25,92]));


// function bubbleSort(array){
// 	for(let i=0; i<array.length-1;i++){
// 	for(let j=0;j<array.length-1-i;j++){
//   	    if(array[j]>array[j+1]){
//             let reverse=array[j];
// 	        array[j]= array[j+1];
// 	        array[j+1]=reverse;
//       }
//     }
//    }
//    return array;
//   }
// console.log(bubbleSort([1,2,3,4,774,1555,156,12385,122,347,22,1,5,6,1]));




let message="";
let hasBlackJack =false;
let isAlive=true;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");

// function random(min,max){
//     sumEl.textContent+=sum+"|";
//     min = Math.floor(min);
//     max = Math.floor(max);
//     let min_random=Math.floor(Math.random() * max );
//     let max_random=Math.floor(Math.random()* min);
//     sum= Math.floor(min_random + max_random); 
    
//     }
     function startGame(){
        let card= [];
        let min=getRandomCard();
        let max=getRandomCard();
        let sum = min+max;
      let newCardEl=document.getElementById('card-el');
     
      for (let i=0; i<=card.length;i++){
          newCardEl.textContent+=card[i]+" ";
          console.log(card[i]); 
      }
 
    if (sum<=20){
        message ="please draw a new card";
    }
    else if (sum===21){
        message="Hurray you have a blackJack!🤞🤞";
        hasBlackJack=true;
    }else {
        message="you lost sorry!😅";
        isAlive=false;
    };

messageEl.textContent=message;
console.log(message);

// document.getElementById("card-el").textContent+=min.toString(2)+ "+" +max.toString(36);
};
function getRandomCard(){
    let finalRoll=Math.floor(Math.random()*13)+1;
    if (finalRoll>=11){
        return 10
    }else if (finalRoll==1){
        return 11
    }else {
        return finalRoll
    }
}
console.log(getRandomCard())


// function newCard(){
//     let cardNew=getRandomCard()
//     sum+=cardNew
//     card.push(cardNew)
//     console.log(card);
// }
// function getRandomCard(){
//     return Math.floor(Math.random()*13)+1;
// }
// let test=getRandomCard();
// console.log(test)
// let raceTime1=102
// let reaceTime2=107

// function totalRaceTime(){
//     let totalRaceTime=raceTime1+reaceTime2;
//     return totalRaceTime;
// }
// let finalOutCome= totalRaceTime();
// console.log(finalOutCome);


















// let savedString;
// function newCard(){
//     savedString=" " + sum +" " ;
//     let newCardEl =document.getElementById("card-el");
//     newCardEl.textContent+=sum ;
//     console.log(sum);
// }
// function showCard(){
// var arr=[];
// while(arr < 1){
//     var r = Math.floor(Math.random() * 36) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// document.getElementById("sum-el").textContent+=" " + arr + " | ";
// console.log(arr);
// };

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');
//       ctx.beginPath();
//       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
//       ctx.moveTo(110, 75);
//       ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//       ctx.moveTo(65, 65);
//       ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//       ctx.moveTo(95, 65);
//       ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//       ctx.stroke();
//     }
//   }
//   console.log(draw());

// let myAcheivements=[
//     "5 years of Customer Service",
//     "Master's in Applied IT",
//     "FreeCodeCamp-Responsive web-design"
// ]
// console.log(myAcheivements.length)

// let myInterest=[
//     "My Name is Nirakar",
//      age=31,
//      "I love Pizza ",true
//      ] 
//      console.log(myInterest);

// let cards=[7,4]
// cards.push(6)
// console.log(cards);

// let messageArr=[
//     "hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "all good. Been working on my portfolio lately"
// ]
// let newMessage="same here!";

// messageArr.push(newMessage)
// messageArr.pop()
// console.log(messageArr);
//   START          FINISH   STEP SIZE
// for (let count=10;  count<21;  count+=1){
//     console.log(count)
// }

// for (let i=10; i<=100;i+=10){
//     console.log(i)
// }

// let cards=[7,3,9,10]
// for (let i=0;i<=cards.length; i++){
//     console.log(cards[i]);
// }

// let sentence=["hello", "my", "friend", "we meet again","Nirakar"]
// let greetingEl=document.getElementById("greeting-el")
// for(let i=0; i <=sentence.length;i++){
// greetingEl.textContent+=" "+sentence[i];
// console.log(sentence[i]);
// }