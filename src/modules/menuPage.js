import imgOne from '../assets/corned_beef_sandwich.jpg';
import imgTwo from '../assets/corned_beef.jpeg';
import imgThree from '../assets/whipped_ricotta_pasta.jpg';
import clock from '../assets/clock.svg';
import fullStar from '../assets/full_star.svg';
import halfStar from '../assets/half_star.svg';

export default function createMenuPage() {;
  const wrapper = document.createElement('div');
  const h2 = document.createElement('h2');
  const cardContainer = document.createElement('div');

  wrapper.classList.add('wrapper');
  cardContainer.classList.add('card-container');

  h2.textContent = "Today's menu";

  cardContainer.appendChild(createItemCard('Corned Beef Sandwich', imgOne));
  cardContainer.appendChild(createItemCard('Corned Beef', imgTwo));
  cardContainer.appendChild(createItemCard('Whipped Ricotta Pasta', imgThree));
  cardContainer.appendChild(createItemCard('Whipped Ricotta Pasta', imgThree));
  cardContainer.appendChild(createItemCard('Corned Beef', imgTwo));
  cardContainer.appendChild(createItemCard('Corned Beef Sandwich', imgOne));
  wrapper.appendChild(h2);
  wrapper.appendChild(cardContainer);

  return wrapper;
}

function createItemCard(text, imgURL) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const descriptionContainer = document.createElement('div');
  const description = document.createElement('p');
  const cookingTimeContainer = document.createElement('div');
  const cookingTime = document.createElement('span');
  const timeIcon = document.createElement('img');
  const grading = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
  const gradingContainer = document.createElement('div');
  const bottomContainer = document.createElement('div');
  const orderNow = document.createElement('a');

  card.classList.add('product-card');
  img.classList.add('product-card-img');
  cookingTimeContainer.classList.add('cooking-time-container');
  descriptionContainer.classList.add('description-container');
  gradingContainer.classList.add('grading-container');
  bottomContainer.classList.add('bottom-container');

  img.src = imgURL;
  description.textContent = text;
  timeIcon.src = clock;
  cookingTime.textContent = '10 mins';
  orderNow.textContent = 'Order Now';
  orderNow.href = '#';
  

  cookingTimeContainer.appendChild(timeIcon);
  cookingTimeContainer.appendChild(cookingTime);
  descriptionContainer.appendChild(description);
  descriptionContainer.appendChild(cookingTimeContainer);
  grading.forEach((e, i) => {
    e.src = (i === 4) ?  halfStar : fullStar;
    gradingContainer.appendChild(e);
  })
  bottomContainer.appendChild(gradingContainer)
  bottomContainer.appendChild(orderNow);
  descriptionContainer.appendChild(bottomContainer);
  card.appendChild(img);
  card.appendChild(descriptionContainer);
  
  return card;
}