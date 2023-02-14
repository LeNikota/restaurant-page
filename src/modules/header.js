export default function createNav() {
  const header = document.createElement('nav');
  const ul = document.createElement('ul');
  const homeButton = createBtn('Home', )
  const menuButton = createBtn('Menu', )
  const aboutUsButton = createBtn('About us', );
  
  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(aboutUsButton);
  header.appendChild(ul);

  return header;
}

function createBtn(text, onClick) {
  const button = document.createElement('button ');
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
}