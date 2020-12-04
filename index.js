var randomnumber1 = Math.floor(Math.random() * 6);
var randomnumber2 = Math.floor(Math.random() * 6);


//rolling dice for player1
switch(randomnumber1) {
  case 0:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;

  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;

  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;

  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;

  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;

  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
}


//rolling dice for player2
switch(randomnumber2) {
  case 0:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  break;

  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  break;

  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  break;

  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  break;

  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  break;

  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  break;
}

var dice1 = document.querySelector(".img1").getAttribute("src");
var dice2 = document.querySelector(".img2").getAttribute("src");

if(dice1 > dice2) document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
else if(dice1 < dice2) document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else document.querySelector("h1").innerHTML = "It's a Draw!";
