import {renderThumbnails} from '/js/thumbnail.js';
import {showBigPicture} from '/js/full-picture.js';
// import {createPhotoDescriptions} from '/js/data.js';
import { listOfPhotoDescriptions } from './data.js';

renderThumbnails(listOfPhotoDescriptions);

// поиск картинки
const container = document.querySelector('.pictures');

const findPicture = (listOfPhoto) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
    return;
    }
    evt.preventDefault();

    const picture = listOfPhoto.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });


};

const pictures = listOfPhotoDescriptions;
export {findPicture};
export {pictures};
