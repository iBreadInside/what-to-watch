import axios from 'axios';
import browserHistory from '../browser-history';
import {AppRoute, REQUEST_TIMEOUT, ResponseCode} from '../const';

const BASE_URL = 'https://7.react.pages.academy/wtw';

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized, onBadRequest, onUnexpectedError) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case ResponseCode.UNAUTHORIZED:
        onUnauthorized();
        break;
      case ResponseCode.BAD_REQUEST:
        onBadRequest();
        throw err;
      case ResponseCode.NOT_FOUND:
        browserHistory.push(AppRoute.NOT_FOUND);
        throw err;
      default:
        onUnexpectedError();
        break;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);
  api.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token');

    return config;
  });

  return api;
};
