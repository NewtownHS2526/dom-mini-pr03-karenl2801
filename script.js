console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here



// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function



// Write the function that moves the veggie scooter forward



// Write the function that moves the bbq scooter forward



// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found



// Add event listeners for each button
// Each button should trigger its own movement function
