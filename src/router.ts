import { initWelcome } from "./pages/welcome";
import { initDetails } from "./pages/details";
import { initGame } from "./pages/play";
import { initResults } from "./pages/results";
function handleRoute(route) {
  const rootEl = document.querySelector(".root") as HTMLElement;
  const routes = [
    {
      path: /\/welcome/,
      handler: () => initWelcome(),
    },
    {
      path: /\/details/,
      handler: () => initDetails(),
    },
    {
      path: /\/game/,
      handler: () => initGame(),
    },
    {
      path: /\/result/,
      handler: () => initResults(),
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      const el = r.handler();

      if (rootEl.hasChildNodes()) {
        rootEl.textContent = "";
      }
      rootEl.appendChild(el);
    }
  }
}
export function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}
