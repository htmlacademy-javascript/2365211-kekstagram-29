import {addValidator, resetPristine} from './form-validate.js';
import {changeOriginalEffect, onEffectListChange, iniSlider} from './filters.js';

const SCALE_STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const PERCENT_DIVIDER = 100;
const SCALEVALUE = 10;

const form = document.querySelector('.img-upload__form');
const imageUploadInput = document.querySelector('.img-upload__input');

const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const effectsList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');
const preview = uploadPreview.querySelector('img');

let scaleNumber;

// Получаем число из строки
const getScaleImage = (scaleString) => parseInt(scaleString.value, SCALEVALUE);

// Уменьшение изображения
const onMinusButtonClick = () => {
  scaleNumber = getScaleImage(scaleControl);
  if (scaleNumber > MIN_VALUE) {
    scaleControl.value = `${scaleNumber - SCALE_STEP}%`;
    preview.style.transform = `scale(${(scaleNumber - SCALE_STEP) / PERCENT_DIVIDER})`;
  }
};

// Увеличение изображения
const onPlusButtonClick = () => {
  scaleNumber = getScaleImage(scaleControl);
  if (scaleNumber < MAX_VALUE) {
    scaleControl.value = `${scaleNumber + SCALE_STEP}%`;
    preview.style.transform = `scale(${(scaleNumber + SCALE_STEP) / PERCENT_DIVIDER})`;
  }
};

const resetScale = () => getScaleImage(scaleControl.value);

const changeScaleffect = () => {
  preview.style.transform = '';
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
  !evt.target.closest('.text__description')) {
    evt.preventDefault();
    hideForm();
  }
};

const showForm = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  iniSlider();
  minusButton.addEventListener('click', onMinusButtonClick);
  plusButton.addEventListener('click', onPlusButtonClick);
  changeOriginalEffect();
  effectsList.addEventListener('change', (onEffectListChange));
};

function hideForm() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  minusButton.removeEventListener('click', onMinusButtonClick);
  plusButton.removeEventListener('click', onPlusButtonClick);
  effectsList.removeEventListener('change', onEffectListChange);
  sliderElement.noUiSlider.destroy();
  form.reset();
  resetPristine();
  changeScaleffect();
  uploadPreview.style.transform = '';
}

const onCancelButtonclick = () => hideForm();
const onFileInputChange = () => showForm();

const addFormChange = () => {
  imageUploadInput.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonclick);
  addValidator();
};

export {addFormChange, hideForm, resetScale, onDocumentKeydown};
