import imgOneSrc from '../assets/img_1.jpg';
import imgTwoSrc from '../assets/img_2.jpg';
import imgThreeSrc from '../assets/img_3.jpg';
import imgFourSrc from '../assets/img_4.jpg';

export default function createAboutUs() {
  const wrapper = document.createElement('div');
  const h2 = document.createElement('h2');
  const descriptionContain = document.createElement('div');
  const imgContainer = document.createElement('div');
  const imgInnerContainerOne = document.createElement('div');
  const imgInnerContainerTwo = document.createElement('div');
  const text = document.createElement('p');
  const link = document.createElement('a');
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');
  const imgFour = document.createElement('img');

  wrapper.classList.add('wrapper');
  wrapper.classList.add('our-story');
  descriptionContain.classList.add('description-container');
  imgContainer.classList.add('image-container');

  h2.textContent = "Our Story";
  text.textContent = "Our restaurant story starts with my uncle. My uncle had a restaurant called, Avec. That restaurant closed. A couple years ago my husband and I decided to buy the rights to my uncle's restaurant and start a restaurant. For the first couple years we worked really hard on our restaurant. After two years it began to make money and we got excited.";
  link.textContent = "More About us"
  link.href = "#"
  imgOne.src = imgOneSrc;
  imgTwo.src = imgTwoSrc;
  imgThree.src = imgThreeSrc;
  imgFour.src = imgFourSrc;

  descriptionContain.appendChild(h2);
  descriptionContain.appendChild(text);
  descriptionContain.appendChild(link);
  imgInnerContainerOne.appendChild(imgOne);
  imgInnerContainerOne.appendChild(imgTwo);
  imgInnerContainerTwo.appendChild(imgThree);
  imgInnerContainerTwo.appendChild(imgFour);
  imgContainer.appendChild(imgInnerContainerOne);
  imgContainer.appendChild(imgInnerContainerTwo);
  wrapper.appendChild(imgContainer);
  wrapper.appendChild(descriptionContain);

  return wrapper;
}