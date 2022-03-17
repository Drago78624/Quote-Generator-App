const btn = document.querySelector(".btn");
const animeName = document.querySelector(".name");
const character = document.querySelector(".character");
const quoteC = document.querySelector(".quote");
const body = document.querySelector("body");

const getQuote = function () {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      const name = String(quote.anime).toLowerCase();
      getWp(name);
      animeName.textContent = quote.anime;
      character.textContent = quote.character;
      quoteC.textContent = quote.quote;
    });
};

function getWp(animeName) {
  fetch(
    `https://wallpaper-api-234.herokuapp.com/wallpapers?name=${animeName}&api_key=maazilovesmiki`
  )
    .then((response) => response.json())
    .then((wp) => {
      const [wallpaper] = wp.wallpapers;
      body.style.backgroundImage = `url(${wallpaper})`;
    });
}

btn.addEventListener("click", getQuote);
