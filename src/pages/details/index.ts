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
  
  .descrip-title {
    margin-top: 115px;

    width: 320px;
    height: 240px;
    
    color: black;
    font-family: American Typewriter;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media (min-width: 767px) {
    .descrip-title {
      width: 600px;
      height: 320px;
      font-size: 60px;
      line-height: 60px;
    }
  }
  
  .button-container {
    width: 320px;
  }

  @media (min-width: 767px) {
    .button-container {
      width: 400px;
    }
  }
  
  .hand-img {
    height: 170px;
    position: relative;
    top: 40px;
  }
  
  @media (min-width: 767px) {
    .hand-img {
      height: 250px;
    }
  }
  `;
  container.appendChild(style);
}
export function initDetails() {
  const paper = require("url:../../images/papel.svg");
  const scissors = require("url:../../images/piedra.svg");
  const rock = require("url:../../images/tijera.svg");

  const componentEl = document.createElement("div") as HTMLElement;
  componentEl.className = "container";

  componentEl.innerHTML = `
    <h3 class="descrip-title">Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
    <div class="button-container">
      <button-comp>¡Jugar!</button-comp>
    </div>
    <div class="images">
    <img class="hand-img" src="${rock}">
      <img class="hand-img" src="${paper}">
      <img class="hand-img" src="${scissors}">
    </div>`;

  const buttonEl = componentEl.querySelector(
    ".button-container"
  ) as HTMLElement;

  buttonEl.addEventListener("click", () => {
    goTo("/game");
  });

  addStyles(componentEl);

  return componentEl;
}
