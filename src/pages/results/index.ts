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
    justify-content: space-around;
  }

  .score {
    border: 10px solid #000000;
    border-radius: 10px;
    width: 260px;
    height: 220px;

    display: flex;
    flex-direction: column;
  }

  .score_title {
    font-family: Odibee Sans;
    font-size: 55px;
    font-weight: 400;
    line-height: 61px;
    text-align: center;
  }

  .history-container {
    margin: 20px 20px 0 0;
    text-align: right;
  }

  .history {
    font-family: Odibee Sans;
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0.05em;
  }

  `;
  container.appendChild(style);
}
export function initResults() {
  const componentEl = document.createElement("div") as HTMLElement;
  componentEl.className = "container";

  componentEl.innerHTML = `
  <div class="img-container">
    <img class="img-result" src="">
  </div>
    <div class="score">
        <h3 class="score_title">Score</h3>
        <div class="history-container">
            <p class="history">Vos: </p>
            <p class="history">Máquina: </p>
        </div>
    </div>
    <div class="button-container">
      <button-comp>Volver a jugar!</button-comp>
    </div>`;

  const buttonEl = componentEl.querySelector(
    ".button-container"
  ) as HTMLElement;

  buttonEl.addEventListener("click", () => {
    goTo("/details");
  });

  addStyles(componentEl);

  return componentEl;
}
