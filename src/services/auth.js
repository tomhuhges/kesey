import query from 'query-string';
import { itemPropertyExists } from './localstorage';

const getToken = () => itemPropertyExists('auth', 'token');

const getParamsFromUrl = url => query.parse(url);

export default {
  getToken,
  getParamsFromUrl,
};
