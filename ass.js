import pkg from "prompt-sync";

const prompt = pkg();

let number = Number(prompt("Enter any number: "));

if (number % 2 == 0 && number <= 5) {
  console.log("Not weird");
} else if (number % 2 == 0 && number <= 20) {
  console.log("Weird");
} else if (number % 2 == 0 && number >= 20) {
  console.log("Not weird");
} else {
  console.log("Weird");
}

let price_of_house = 1000000;
let user_price = Number(prompt("What is your budget?: "));
let downpayment;

if (user_price <= 500000 && user_price >= 300000) {
  downpayment = (10 / 100) * price_of_house;
  console.log(`Your downpayment is: NGN${downpayment}`);
} else if (user_price >= 500000) {
  downpayment = (20 / 100) * price_of_house;
  console.log(`Your downpayment is: NGN${downpayment}`);
} else {
  console.log("Sorry, you are not eligible for this purchase");
}

let question = prompt("What is your name?: ").toUpperCase();
let answer = "ONA";

console.log(question === answer ? "CORRECT" : "WRONG");
