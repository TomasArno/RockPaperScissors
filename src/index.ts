import { goTo } from "./router";
import "./components/button";

(function init() {
  window.addEventListener("load", () => goTo("/game"));
})();
