export default function createHeader() {
  const nav = document.createElement('nav');
  const homeButton = createBtn('Home', () => console.log('test'))
  const menuButton = createBtn('Menu', () => console.log('test'))
  const aboutUsButton = createBtn('About us', () => console.log('test'));
  
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