function rollTheDice() {
  var heading = document.querySelector("h1");
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomNumber2 = Math.ceil(Math.random() * 6);

  var player1 = randomNumber1;
  var player2 = randomNumber2;

  var imageNumber1 = "images/dice" + randomNumber1 + ".png";
  var imageNumber2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", imageNumber1);
  document.querySelectorAll("img")[1].setAttribute("src", imageNumber2);

  if (player1 === player2) {
    heading.innerHTML = "Draw! 🎲";
  } else if (player1 > player2) {
    heading.innerHTML = "🏆 Player 1 Wins!";
  } else heading.innerHTML = "Player 2 Wins! 🏆";
}
