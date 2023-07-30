const FILTER_SHOW_PHOTO = 10;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генерация массива из FILTER_SHOW_PHOTO (10) неповторяющихся чисел
const generateArrayUniqueNumbers = (a, b) => {
  const numbers = [];
  while (numbers.length < FILTER_SHOW_PHOTO) {
    const randomNumber = getRandomInteger(a, b);
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) {
      numbers[numbers.length] = randomNumber;
    }
  }
  return numbers;
};

// Генерируем 10 неповторяющихся чисел от 0 до 24, т.к. в данном случае массив с сервера содержит только 25 постов
const randomNumbers = generateArrayUniqueNumbers(0, 24);
const createRandomPosts = (array) => {
  const randomPosts = [];
  for (let i = 0; i < randomNumbers.length; i++) {
    const posts = array.find((post) => randomNumbers[i] === post.id);
    randomPosts.push(posts);
  }
  return randomPosts;
};

// «устранение дребезга»
function debounce (callback, timeoutDelay) {
  let isCooldown = false;
  return function() {
    if (isCooldown) {
      return;
    }
    callback.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    }, timeoutDelay);
  };
}

const pressEscButton = (evt) => evt.key === 'Escape';
// Проверка, является ли нажатая кнопка Esc

export {getRandomInteger, pressEscButton, debounce, createRandomPosts};
