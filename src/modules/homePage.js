export default function createMainPage() {;
  const wrapper = document.createElement('div');
  const background = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');

  wrapper.classList.add('wrapper');
  background.classList.add('homepage-background');

  h1.textContent = 'Good Food, Great Vibe';
  p.textContent = 'We serve nice food and provide a great place for people to relax with friends, family and colleagues, many of whom have been coming to our restaurants for years.'
  button.textContent = 'Book A Table';

  background.appendChild(wrapper);
  wrapper.appendChild(h1);
  wrapper.appendChild(p);
  wrapper.appendChild(button);

  return background
}
