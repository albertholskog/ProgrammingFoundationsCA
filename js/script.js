//Question 1

const outOfStock = false;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 2

for (let i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}
//Question 3

const games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];
for (let i = 0; i < games.length; i++) {
  const gameTitle = games[i].title;
  const ratingGame = games[i].rating;
  if ((ratingGame < 3, 5 && ratingGame !== null)) {
  }
}

//Question 4
function whatIDontLike(value) {
  if (typeof value === "string") {
    console.log("I don't like " + value);
  } else if (typeof value !== true) {
    console.log("Please send in a string");
  }
}
whatIDontLike("lutefisk");
whatIDontLike(5);
whatIDontLike(true);
whatIDontLike(null);

//Question 5

function subtraction(num1, num2) {
  const concertedNumber1 = parseInt(num1);
  const concertedNumber2 = parseInt(num2);

  if (isNaN(concertedNumber1) || isNaN(concertedNumber1)) {
    return "Invalid argument(s)";
  } else {
    return concertedNumber1 - concertedNumber2;
  }
}
document.getElementById("subtraction").innerHTML = subtraction(1, 42);
document.getElementById("subtraction").innerHTML = subtraction(200, 150);
document.getElementById("subtraction").innerHTML = subtraction(10, "50");
document.getElementById("subtraction").innerHTML = subtraction("100", "400");
document.getElementById("subtraction").innerHTML = subtraction(
  "Ten",
  "One Hundred"
);
document.getElementById("subtraction").innerHTML = subtraction(null, 123);
//Question 6

//Question 7
