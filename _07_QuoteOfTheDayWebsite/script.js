const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://type.fit/api/quotes";

function getQuote(url) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((responseData) => {
      let display = responseData;
      let arrNum = display[Math.floor(Math.random() * display.length)];

      let randomQuote = arrNum.text;
      let randomAuthor = arrNum.author;

      // console.log(randomQuote);
      // console.log(randomAuthor);
      quote.innerHTML = randomQuote;
      author.innerHTML = randomAuthor;
    });
}

getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--by " +
      author.innerHTML,
    "Tweet Window"
  );
}
