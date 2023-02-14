import createMainPage from "./homePage";
import createHeader from "./header";

export default function init() {
  const root = document.body;
  const main = document.createElement('main');

  root.appendChild(createHeader());
  root.appendChild(main);
  main.appendChild(createMainPage());
}
