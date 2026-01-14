console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniBtn = document.querySelector("#pepperoni-button");
const veggieBtn    = document.querySelector("#veggie-button");
const bbqBtn       = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter    = document.querySelector("#veggie-scooter");
const bbqScooter       = document.querySelector("#bbq-scooter");

const winnerBox = document.querySelector("#winner");

// Write the function that moves the pepperoni scooter forward
const movePepperoni = () => {
  pepperoni_step++;
  shift(pepperoniScooter, pepperoni_step);
  checkWinner("Pepperoni");
};

// Write the function that moves the veggie scooter forward
const moveVeggie = () => {
  veggie_step++;
  shift(veggieScooter, veggie_step);
  checkWinner("Veggie");
};

// Write the function that moves the bbq scooter forward
const moveBBQ = () => {
  bbq_step++;
  shift(bbqScooter, bbq_step);
  checkWinner("BBQ");
};

// Write a function that checks if a scooter reached column 7
// If so, display the winner message
const checkWinner = (name) => {
  if (
    pepperoni_step === 7 ||
    veggie_step === 7 ||
    bbq_step === 7
  ) {
    winnerBox.textContent = `${name} wins! 🍕`;
    disableButtons();
  }
};

// Disable all buttons when a winner is found
const disableButtons = () => {
  pepperoniBtn.disabled = true;
  veggieBtn.disabled = true;
  bbqBtn.disabled = true;
};

// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniBtn.addEventListener("click", movePepperoni);
veggieBtn.addEventListener("click", moveVeggie);
bbqBtn.addEventListener("click", moveBBQ);