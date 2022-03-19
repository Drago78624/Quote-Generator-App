const btn = document.querySelector(".btn");
const name = document.querySelector(".name");
const character = document.querySelector(".character");
const quoteC = document.querySelector(".quote");
const body = document.querySelector("body");

const getQuote = function () {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      const animeName = String(quote.anime).toLowerCase();
      name.textContent = quote.anime;
      character.textContent = quote.character;
      quoteC.textContent = quote.quote;
      return fetch(
        `https://wallpaper-api-234.herokuapp.com/wallpapers?name=${animeName}&api_key=maazilovesmiki`
      );
    })
    .then((response) => response.json())
    .then((wp) => {
      let randomNumber = Math.floor(Math.random() * wp.wallpapers.length);
      const wallpaper = wp.wallpapers[randomNumber];
      console.log(wallpaper);
      body.style.backgroundImage = `url(${wallpaper})`;
    });
};

btn.addEventListener("click", getQuote);
