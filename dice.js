// p1
// var p1 ,p2;


//     var randmonno = Math.floor(Math.random() * 6) + 1;
//     p1 = randmonno;
//     if (randmonno === 1){
//         document.getElementById("i1").setAttribute("src","images/dice1.png");
//     }else if(randmonno === 2){
//         document.getElementById("i1").setAttribute("src","images/dice2.png");
//     }else if(randmonno === 3){
//         document.getElementById("i1").setAttribute("src","images/dice3.png");
//     }else if(randmonno === 4){
//         document.getElementById("i1").setAttribute("src","images/dice4.png");
//     }else if(randmonno === 5){
//         document.getElementById("i1").setAttribute("src","images/dice5.png");
//     }else {
//         document.getElementById("i1").setAttribute("src","images/dice6.png");
//     }
  




//     var randmonno = Math.floor(Math.random() * 6) + 1;
//     p2 = randmonno;
//     if (randmonno === 1){
//         document.getElementById("i2").setAttribute("src","images/dice1.png");
//     }else if(randmonno === 2){
//         document.getElementById("i2").setAttribute("src","images/dice2.png");
//     }else if(randmonno === 3){
//         document.getElementById("i2").setAttribute("src","images/dice3.png");
//     }else if(randmonno === 4){
//         document.getElementById("i2").setAttribute("src","images/dice4.png");
//     }else if(randmonno === 5){
//         document.getElementById("i2").setAttribute("src","images/dice5.png");
//     }else {
//         document.getElementById("i2").setAttribute("src","images/dice6.png");
//     }
    
// //win condition

//  play1 = p1;
//  play2 = p2;
//  if(p1 > p2){
//     document.querySelector("h1").innerHTML = "Player1 is thw winner";
//  }else if(p2 > p1){
//     document.querySelector("h1").innerHTML = "Player2 is thw winner";
//  }else{
//     document.querySelector("h1").innerHTML = "Draw";
//  }

var randomP1 = Math.floor(Math.random()*6) + 1;

var randomImg1 = document.querySelectorAll("img")[0];

randomImg1.setAttribute("src","images/dice" + randomP1 + ".png");

var randomP2 = Math.floor(Math.random()*6) + 1;

var randomImg2 = document.querySelectorAll("img")[1];

randomImg2.setAttribute("src","images/dice" + randomP2 + ".png");

if(randomP1>randomP2){
    document.querySelector("h1").innerHTML ="Player 1 is the winner ";
}else if(randomP2>randomP1){
    document.querySelector("h1").innerHTML = "Player 2 is the winner";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}