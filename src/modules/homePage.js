export default function createMainPage() {;
  const mainPage = document.createElement('div');
  const wrapper = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');

  mainPage.classList.add('main-page');
  wrapper.classList.add('wrapper');

  h1.textContent = 'Good Food, Great Vibe';
  p.textContent = 'We serve nice food and provide a great place for people to relax with friends, family and colleagues, many of whom have been coming to our restaurants for years.'
  button.textContent = 'Book A Table';

  mainPage.appendChild(wrapper);
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  wrapper.appendChild(button);

  return mainPage
}
