const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const createElements = list => {
  const { url, alt } = list
return `<li class="gallery__item">
<p class="gallery__item--text">${alt}</p>
<img src='${url}' alt='${alt}' class="pct__nature">
</img>
</li>`;
};

const galleryRoster = document.querySelector('.gallery');
const galleryRosterElements = images.map(createElements,)
.join('');

galleryRoster.insertAdjacentHTML('afterbegin', galleryRosterElements);