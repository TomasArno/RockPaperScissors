import { goTo } from "../../router";
function addStyles(container: HTMLElement) {
  const style = document.createElement("style");
  style.innerHTML = `
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .timer-container {
    border: 23px solid #000000;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin: auto;
  }
  .timer {
    margin-top: 80px;
    font-family: American Typewriter;
    font-size: 100px;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0em;
    text-align: center;
  }

  .my-images {
    position: relative;
    top: 50px;
  }

  .my-hand-img {
    height: 235px;
  }

  .computer-hand-img {
    height: 355px;
    transform: rotate(180deg);

    position: relative;
    bottom: 40px;
  }
  
  .hand-selected {
    height: 355px;
  }
  
  `;
  container.appendChild(style);
}

function callbacks(componentEl: HTMLElement) {
  const myImagesEl = componentEl.querySelector(".my-images") as HTMLElement;

  myImagesEl.addEventListener("click", (el: any) => {
    const selectedImg = el.target;
    const urlImgSelected = selectedImg.getAttribute("src");

    selectedImg.style.height = "275px";

    setTimeout(() => {
      componentEl.innerHTML = `
      <div class="computer-image">
        <img class="computer-hand-img" src="${urlImgSelected}">
      </div>
  
      <div class="my-images">
        <img class="hand-selected" src="${urlImgSelected}">
      </div>
      `;
      addStyles(componentEl);
    }, 500);
    setTimeout(() => {
      goTo("/results");
    }, 2500);
  });
}

function doNothing(componentEl: HTMLElement) {
  let randomNum = Math.random() * 3;
  randomNum = Math.floor(randomNum);
  let cpuRandomNum = Math.random() * 3;
  cpuRandomNum = Math.floor(cpuRandomNum);

  const imgContainer = componentEl.querySelector(".my-images") as any;
  const myImagesEl = imgContainer.querySelectorAll(".my-hand-img");

  const randomImg = myImagesEl[randomNum];
  const urlImg = randomImg.getAttribute("src");

  const cpuRandomImg = myImagesEl[cpuRandomNum];
  const cpUrlImg = cpuRandomImg.getAttribute("src");

  componentEl.innerHTML = `
      <div class="computer-image">
        <img class="computer-hand-img" src="${cpUrlImg}">
      </div>
  
      <div class="my-images">
        <img class="hand-selected" src="${urlImg}">
      </div>
      `;
  addStyles(componentEl);
  setTimeout(() => {
    goTo("/results");
  }, 2500);
}

export function initGame() {
  const componentEl = document.createElement("div") as HTMLElement;
  componentEl.className = "container";

  const paper = require("url:../../images/papel.svg");
  const scissors = require("url:../../images/piedra.svg");
  const rock = require("url:../../images/tijera.svg");

  componentEl.innerHTML = `

  <div class="timer-container">
    <div class="timer"></div>
  </div>
  <div class="my-images">
    <img class="my-hand-img rock" src="${rock}">
    <img class="my-hand-img paper" src="${paper}">
    <img class="my-hand-img scissors" src="${scissors}">
  </div>
  `;

  let counter = 3;
  const timerEl = componentEl.querySelector(".timer") as HTMLElement;
  const intervalId = setInterval(() => {
    timerEl.textContent = counter.toString();
    counter--;
    if (counter < 0) {
      clearInterval(intervalId);
      doNothing(componentEl);
    }
  }, 1000);

  callbacks(componentEl);
  addStyles(componentEl);
  return componentEl;
}
