const quotes = [
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it",
    source: "Patrick McKenzie",
    tag: "motivation"
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss"
  },
  {
    quote: "Be yourself, everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe. ",
    source: "Albert Einstein",
    tag: "funny"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tag: "inspiring"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    year: 2000
  },
  {
    quote: "Without music, life would be a mistake.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols"
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    source: "H. Jackson Brown",
    year: 1990
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson",
    year: 1828
  }
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  let randomValue = quotes[Math.floor(Math.random() * quotes.length)];
  return randomValue;
}

// Global declaration
let theString;
let aux;
const buttonColor = document.getElementById("loadQuote");

//Random background color
const randomColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rndColor = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = rndColor;
  buttonColor = rndColor;
};

// Create the printQuote function
const printQuote = () => {
  aux = getRandomQuote(quotes);
  theString = '<p class="quote">' + aux.quote + "</p>";
  theString = theString + '<p class="source">' + aux.source;
  if (typeof aux.tag === "string") {
    theString = theString + '<span class="citation">' + aux.tag + "</span>";
  }
  if (typeof aux.citation === "string") {
    theString =
      theString + '<span class="citation">' + aux.citation + "</span>";
  }
  if (aux.year > 0) {
    theString = theString + '<span class="year">' + aux.year + "</span> </p>";
  } else {
    theString = theString + "</p>";
  }
  document.getElementById("quote-box").innerHTML = theString;
  randomColor();
};

// Auto-refresh evert 10 seconds
var intervalId = window.setInterval(printQuote, 10000);

// This event listener will respond to "Show another quote" button clicks
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
