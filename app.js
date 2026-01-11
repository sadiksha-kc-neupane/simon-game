let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "green", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  console.log("game started");
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 150);
}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);

  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  btnFlash(randBtn);
}
