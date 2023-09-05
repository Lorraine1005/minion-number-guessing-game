const randomNumberGeneratorBtn = document.getElementById(
  "random-number-generator-btn"
);
const resetBtnEl = document.getElementById("reset-btn");
const submitInputBtn = document.getElementById("submit-input-btn");
const guessInputEl = document.getElementById("guess-input-el");
const gameStateDisplayEl = document.getElementById("game-state-display-el");
const gameTriesCounterEl = document.getElementById("game-tries-counter");

let tries = 0;
let randomNumber;

//RANDOM NUMBER GENERATOR
randomNumberGeneratorBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log(randomNumber);

  return randomNumber;
});

//USER SUBMISSION
submitInputBtn.addEventListener("click", function () {
  const userNum = Number(guessInputEl.value);
  tries += 1;
  gameTriesCounterEl.textContent = `total tries: ${tries}`;
  if (randomNumber === userNum) {
    gameStateDisplayEl.textContent =
      "Congratulations, You guessed it correctly! Wanna Play Again? Click Reset Below";
  } else if (randomNumber != userNum && tries <= 2 && userNum < randomNumber) {
    gameStateDisplayEl.textContent =
      "try again 😞, your guess is less than the mystery number";
  } else if (randomNumber != userNum && tries <= 2 && userNum > randomNumber) {
    gameStateDisplayEl.textContent =
      "try again 😞, your guess is higher than the mystery number";
  } else if (tries > 3) {
    gameStateDisplayEl.textContent =
      "Oh no you've run out of tries 😞 Click 'reset game' to start afresh";

    gameTriesCounterEl.textContent = `total tries: 3 - GAME OVER. The Mystery number was ${randomNumber}
`;
  } else if (randomNumber != userNum && tries === 3 && userNum < randomNumber) {
    gameStateDisplayEl.textContent =
      "Try again, this is your last chance. your guess is less than the mystery number ";
  } else if (randomNumber != userNum && tries === 3 && userNum > randomNumber) {
    gameStateDisplayEl.textContent =
      "Try again, this is your last chance. your guess is higher than the mystery number ";
  }
  guessInputEl.value = "";
});
//RESET GAME
resetBtnEl.addEventListener("click", function () {
  guessInputEl.value = "";
  gameTriesCounterEl.textContent = "";
  tries = 0;
  gameStateDisplayEl.textContent = "";
});
