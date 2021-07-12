import axios from 'axios';
import browserHistory from '../browser-history';
import {AppRoute, ResponseCode} from '../const';

const BASE_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized, onBadRequest) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response, message} = err;

    switch (response.status) {
      case ResponseCode.UNAUTHORIZED:
        onUnauthorized();
        break;
      case ResponseCode.BAD_REQUEST:
        onBadRequest(message);
        break;
      case ResponseCode.NOT_FOUND:
        browserHistory.push(AppRoute.NOT_FOUND);
        break;
      default:
        return err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
