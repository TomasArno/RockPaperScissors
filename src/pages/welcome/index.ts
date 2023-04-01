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
  
  .intro-title {
    margin-top: 115px;

    width: 284px;
    height: 204px;
    
    color: #009048;
    font-size: 80px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
  }
  
  .button-container {
    width: 320px;
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

  @media (min-width: 768px) {
    .intro-title {

    width: 350px;
    height: 280px;
    font-size: 100px;
    line-height: 90px;
    }

    .button-container {
      width: 400px;

    }

  }

  `;
  container.appendChild(style);
}
export function initWelcome() {
  const paper = require("url:../../images/papel.svg");
  const scissors = require("url:../../images/piedra.svg");
  const rock = require("url:../../images/tijera.svg");

  const componentEl = document.createElement("div") as HTMLElement;
  componentEl.className = "container";

  componentEl.innerHTML = `
    <h1 class="intro-title">Piedra Papel ó Tijera</h1>
    <div class="button-container">
      <button-comp>¡Empezar!</button-comp>
    </div>
    <div class="images">
      <img class="hand-img" src="${rock}">
      <img class="hand-img" src="${paper}">
      <img class="hand-img" src="${scissors}">
    </div>`;

  addStyles(componentEl);
  const buttonEl = componentEl.querySelector(
    ".button-container"
  ) as HTMLElement;

  buttonEl.addEventListener("click", () => {
    goTo("/details");
  });

  return componentEl;
}
