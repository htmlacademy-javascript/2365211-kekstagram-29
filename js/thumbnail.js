const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThubmnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.dataset.thumbnailId = id;
  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const unnecessaryPosts = container .querySelectorAll('.picture');
  unnecessaryPosts.forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThubmnail(picture);
    fragment.append(thumbnail);

  });
  container.append(fragment);
};
export {renderThumbnails};
