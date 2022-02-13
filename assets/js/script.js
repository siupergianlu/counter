const insertCoin = document.querySelector(".insert-coin");
const removeCoin = document.querySelector(".remove-coin");
const counterBox = document.querySelector(".counter-box");
const body = document.querySelector("body");
const header = document.querySelector(".header");

const disappearText = function () {
  header.innerHTML = "";
};

const appearText = function () {
  header.innerHTML = "Insert coin to play";
};
setInterval(disappearText, 800);
setInterval(appearText, 1600);

const changeGreenColor = function () {
  body.style.backgroundColor = "#669900";
};

const changeRedColor = function () {
  body.style.backgroundColor = "#ff0000";
};

const baseColor = function () {
  body.style.backgroundColor = "#262626";
};

const addLives = function () {
  let lives = Number(counterBox.innerText);
  lives += 1;
  counterBox.innerText = lives;
  setTimeout(changeGreenColor, 50);
  setTimeout(baseColor, 100);
};

const removeLives = function () {
  let lives = Number(counterBox.innerText);
  if (lives !== 0) {
    lives -= 1;
    counterBox.innerText = lives;
    setTimeout(changeRedColor, 50);
    setTimeout(baseColor, 100);
  }
};

insertCoin.addEventListener("click", addLives);
removeCoin.addEventListener("click", removeLives);
