import { getRandomInteger, getRandomArrayElement,createRandomNumberFromRangeGenerator } from '/js/util.js';

const USER_PHOTO_COUNT = 25;

const COMMENTS_COUNT = 30;

const PHOTO_DESCRIPTION = [
  'Хороший свет',
  'Неожиданный ракурс',
  'Хорошее решение',
  'Ранним утром'
];

const NAMES = [
  'Карлсон',
  'Том Сойер',
  'Старик Хоттабыч',
  'Змей Горыныч',
  'Алёнушка',
  'Илья Муромец'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generatePhotoId = createRandomNumberFromRangeGenerator(1, 25);
const generateUrlId = createRandomNumberFromRangeGenerator(1, 25);
const generateCommentId = createRandomNumberFromRangeGenerator(1, 500);
const generateAvatarId = createRandomNumberFromRangeGenerator(1, 6);

const generateMessage = () => {
  const messageCount = getRandomInteger(1, 2);
  const message = [];
  for (let i = 0; i <= messageCount; i++){
    message.push(getRandomArrayElement(MESSAGES));
  }
  return message.join(' ');
};

const createComment = () => {
  const id = generateCommentId();
  const avatarId = generateAvatarId();
  const message = generateMessage();
  return {
    id: id,
    avatar: `img/avatar-${avatarId}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)

  };

};

const test = () => {
  const id = generatePhotoId();
  const urlId = generateUrlId();
  return{
    id: id,
    url: `photos/${urlId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: COMMENTS_COUNT}, createComment)
  };
};

const createPhotoDescriptions = () => Array.from({length: USER_PHOTO_COUNT}, test);

const listOfPhotoDescriptions =   createPhotoDescriptions()

export {listOfPhotoDescriptions}

export {createPhotoDescriptions};
