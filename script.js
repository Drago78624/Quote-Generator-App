const btn = document.querySelector(".btn");
const animeName = document.querySelector(".name");
const character = document.querySelector(".character");
const quoteC = document.querySelector(".quote");

const getQuote = function () {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      animeName.textContent = quote.anime;
      character.textContent = quote.character;
      quoteC.textContent = quote.quote;
      console.log(quote);
    });
};

btn.addEventListener("click", getQuote);
