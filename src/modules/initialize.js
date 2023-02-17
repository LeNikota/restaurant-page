import createMainPage from "./homePage";
import createHeader from "./header";

export default function init() {
  const root = document.body;
  const mainContainer = document.createElement('main');
  
  root.appendChild(createHeader());
  mainContainer.appendChild(createMainPage());
  root.appendChild(mainContainer);
}
