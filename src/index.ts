import { initRouter } from "./router";
import { state } from "./state";
import "./components/button";
import "./components/win";
import "./components/lose";

(function init() {
  state.syncroWithLocalStorage();

  initRouter();
})();
