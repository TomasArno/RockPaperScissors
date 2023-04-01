import { initWelcome } from "./pages/welcome";
import { initDetails } from "./pages/details";
import { initGame } from "./pages/play";
import { initResults } from "./pages/results";

const base_path = "/RockPaperScissors";

export function isGithubPages() {
  return location.host.includes("github.io");
}

function handleRoute(route) {
  const rootEl = document.querySelector(".root") as HTMLElement;

  const newRoute = isGithubPages() ? route.replace(base_path, "") : route;

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
    if (r.path.test(newRoute)) {
      const el = r.handler();

      if (rootEl.hasChildNodes()) {
        rootEl.textContent = "";
      }
      rootEl.appendChild(el);
    }
  }
}
export function goTo(path) {
  const completePath = isGithubPages() ? base_path + path : path;
  history.pushState({}, "", completePath);
  handleRoute(completePath);
}

export function initRouter() {
  if (isGithubPages() || location.pathname == "/" || location.pathname != "/") {
    goTo("/welcome");
  }
}
