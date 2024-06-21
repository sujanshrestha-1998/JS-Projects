const randNum = parseInt(Math.random() * 100 + 1);
const btn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");
const chances = document.querySelector("#chances");
const lowandhigh = document.querySelector("#lowandhigh");
const refresh = document.querySelector("#tryAgain");
console.log(randNum);

let chance = 10;
chances.innerHTML = chance;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = parseInt(document.querySelector("#guessInput").value);
  if (randNum === inputValue) {
    result.innerHTML = "You Win";
  } else if (chance === 0) {
    result.innerHTML = "You Lost";
  } else if (randNum != inputValue) {
    chance -= 1;
    chances.innerHTML = chance;
    result.innerHTML = "Wrong";
  }

  if (inputValue > randNum) {
    lowandhigh.innerHTML = "The value is greater than the number guessed";
  } else if (inputValue < randNum) {
    lowandhigh.innerHTML = "The value is lower than the number guessed";
  }
});

refresh.addEventListener("click", () => {
  location.reload();
});
