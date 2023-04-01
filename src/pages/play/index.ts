import { goTo } from "../../router";
import { state } from "../../state";

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

  @media (min-width: 767px) {
    .hand-img {
      height: 250px;
    }
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

  .warning-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

  }

  @media (min-width: 767px) {
    .warning-container {
      row-gap: 80px;
    }
  }

  .warning {
    color: black;
    width: 410px;

    font-family: American Typewriter;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media (min-width: 767px) {
    .warning {
      width: 700px;
      font-size: 50px;
      line-height: 60px;
    }
  }

  .btn-container {
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
  }
  
  `;
  container.appendChild(style);
}

function callbacks(componentEl: HTMLElement, event) {
  const imgContainer = componentEl.querySelector(".my-images") as HTMLElement;
  const imagesEl = imgContainer.querySelectorAll(".my-hand-img");

  const selectedImg = event.target;
  const urlImgSelected = selectedImg.getAttribute("src");
  const idImgSelected = selectedImg.getAttribute("id");

  let cpuRandomNum = Math.floor(Math.random() * 3);

  const cpuRandomImg = imagesEl[cpuRandomNum];
  const cpUrlImg = cpuRandomImg.getAttribute("src");
  const cpuIdImg = cpuRandomImg.getAttribute("id") as any;

  state.setMove({
    myMove: idImgSelected,
    cpuMove: cpuIdImg,
  });

  componentEl.innerHTML = `
      <div class="computer-image">
        <img class="computer-hand-img" src="${cpUrlImg}">
      </div>

      <div class="my-images">
        <img class="hand-selected" src="${urlImgSelected}">
      </div>
      `;
  addStyles(componentEl);

  setTimeout(() => {
    goTo("/results");
  }, 2500);
}

function doNothing(componentEl: HTMLElement) {
  componentEl.innerHTML = `
      <div class="warning-container">
        <p class="warning">¡Recordá elegir una opción antes que pasen los 3 segundos!</p>
        
        <div class ="btn-container">
          <button-comp class ="redirect-btn">Volver</button-comp>
        </div>
      </div>
      `;
  addStyles(componentEl);

  const redirectBtn = componentEl.querySelector(".redirect-btn") as HTMLElement;

  redirectBtn.addEventListener("click", () => {
    goTo("/details");
  });
}

export function initGame() {
  const componentEl = document.createElement("div") as HTMLElement;
  componentEl.className = "container";

  const paper = require("url:../../images/papel.svg");
  const scissors = require("url:../../images/tijera.svg");
  const rock = require("url:../../images/piedra.svg");

  componentEl.innerHTML = `

  <div class="timer-container">
    <div class="timer"></div>
  </div>
  <div class="my-images">
  <img class="my-hand-img scissors" id=scissors src="${scissors}">
  <img class="my-hand-img paper" id=paper src="${paper}">
  <img class="my-hand-img rock" id=rock src="${rock}">
  </div>
  `;
  addStyles(componentEl);

  const imgContainer = componentEl.querySelector(".my-images") as any;
  const timerEl = componentEl.querySelector(".timer") as HTMLElement;
  let counter = 3;
  const intervalId = setInterval(() => {
    timerEl.textContent = counter.toString();
    counter--;
    if (counter < 0) {
      clearInterval(intervalId);
      doNothing(componentEl);
    }
  }, 1000);

  imgContainer.addEventListener("click", (e: any) => {
    clearInterval(intervalId);
    callbacks(componentEl, e);
  });
  return componentEl;
}
