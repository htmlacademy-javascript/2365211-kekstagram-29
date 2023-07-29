// Получение данных
import { showErrorMessage } from './form-messages.js';
//import {showAlert} from './util.js';
const URL = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET: '/data',
  POST: '',
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErrorText = {
  GET: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  POST: 'Не удалось отправить форму. Попробуйте еще раз',
};

const load = async (route, errorText, method = Method.GET, body = null) => {
  try {
    const response = await fetch(`${URL}${route}`, {method, body});
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch {
    showErrorMessage(errorText);
  } throw new Error(errorText);
};

const getData = () => load(Route.GET, ErrorText.GET);

const sendData = (body) => load(Route.POST, ErrorText.POST, Method.POST, body);

const datas = await getData();

export {getData, sendData, datas};
