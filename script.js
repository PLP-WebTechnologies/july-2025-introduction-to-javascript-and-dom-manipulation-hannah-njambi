// Part 1: Variables & Conditionals

function checkAge() {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are eligible to vote 🎉";
  } else {
    result.textContent = "Sorry, you are too young to vote 😢";
  }
}

// Part 2: Functions
// Function to display greeting
function showGreeting(name) {
  const message = `Hello, ${name}! Welcome to JavaScript 🚀`;
  document.getElementById("greetingOutput").textContent = message;
}

// Function to calculate total
function calculateTotal() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const total = num1 + num2;

  document.getElementById("totalResult").textContent = `Total: ${total}`;
}

// Part 3: Loops
// Example 1: Iterating through an array
function listFruits() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const list = document.getElementById("fruitList");

  list.innerHTML = ""; // Clear old list
  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// Example 2: Countdown with while loop
function countdown() {
  let number = 5;
  let output = "";

  while (number >= 0) {
    output += number + " ";
    number--;
  }

  document.getElementById("countdownResult").textContent = output;
}

// Part 4: DOM Manipulation

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight");
});

const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New dynamic item";
  dynamicList.appendChild(newItem);
});
