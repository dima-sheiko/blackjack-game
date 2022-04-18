let player = {
  name: "Dima",
  chips: 200
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let cardRandomizer = Math.floor(Math.random() * 13) + 1;

  if (cardRandomizer > 10) {
    return 10;
  } else if (cardRandomizer === 1) {
    return 11;
  } else {
    return cardRandomizer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEL.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let anotherCard = getRandomCard();
    sum += anotherCard;
    cards.push(anotherCard);
    renderGame();
  }
}
