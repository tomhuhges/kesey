import query from 'query-string';

const getToken = () => {
  return localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).token : undefined;
};

const getParamsFromUrl = url => query.parse(url);

export default {
  getToken,
  getParamsFromUrl,
};
