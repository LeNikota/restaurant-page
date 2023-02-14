import createMainPage from "./homePage";

export default function init() {
  const root = document.getElementById('root')

  root.appendChild(createMainPage());
}
