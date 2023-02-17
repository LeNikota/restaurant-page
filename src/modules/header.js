import createHomePage from './homePage';
import createMenuPage from './menuPage';
import createAboutUs from './aboutUs';

export default function createHeader() {
  const nav = document.createElement('nav');
  const homeButton = createBtn('Home', handlePageChange)
  const menuButton = createBtn('Menu', handlePageChange)
  const aboutUsButton = createBtn('About us', handlePageChange);
  
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutUsButton);

  return nav;
}

function createBtn(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}

function handlePageChange(e) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  switch (e.target.textContent) {
    case 'Home':
      main.appendChild(createHomePage());
      break;
    case 'Menu':
      main.appendChild(createMenuPage());
      break;
    case 'About us':
      main.appendChild(createAboutUs());
      break;
  }
}