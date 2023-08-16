import pkg from "prompt-sync";

const prompt = pkg();

//QUESTION 1 BEGINS

let n = Number(prompt("Enter any number: "));

if (n % 2 != 0) {
  console.log("Weird");
} else if (n % 2 == 0 && n <= 5) {
  console.log("Not Weird");
} else if (n % 2 == 0 && n >= 6 && n <= 20) {
  console.log("Weird");
} else if (n % 2 == 0 && n >= 20) {
  console.log("Not weird");
}

// let number = Number(prompt("Enter any number: "));

// if (number % 2 == 0 && number <= 5) {
//   console.log("Not weird");
// } else if (number % 2 == 0 && number <= 20) {
//   console.log("Weird");
// } else if (number % 2 == 0 && number >= 20) {
//   console.log("Not weird");
// } else {
//   console.log("Weird");
// }

//END OF QUSETION 1

//BEGINNING OF QUESTION 2

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

//END OF QUESTION 2

//BEGINNING OF QUESTION 3

let question_1 = Number(prompt("What year did America gain independence?: "));

if (question_1 === 1776) {
  console.log("You are correct!");
} else {
  console.log("You are wrong!");
}

let question_2 = prompt("Who was the first president of America?: ");

if (question_2.toLowerCase() === "George Rosevelt") {
  console.log("You are correct!");
} else {
  console.log("You are wrong!");
}

let question_3 = prompt("What continent is Mount Kilimanjaro?: ");

if (question_3.toLowerCase() === "Africa") {
  console.log("You are correct!");
} else {
  console.log("You are wrong!");
}

let question_4 = prompt(
  "Which country is referred to as the Giant of Africa?: "
);

if (question_4.toLowerCase() === "Nigeria") {
  console.log("You are correct!");
} else {
  console.log("You are wrong!");
}

let question_5 = prompt(
  "Who is the present President of the Federal Republic of Nigeria?: "
);

if (question_5.toLowerCase() === "Bola Ahmed Tinubu") {
  console.log("You are correct!");
} else {
  console.log("You are wrong!");
}

//END OF ALL QUESTIONS
