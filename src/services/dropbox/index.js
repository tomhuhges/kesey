import Dropbox from 'dropbox';
import clientId from './clientId';

const getAuthUrl = () => {
  const dbx = new Dropbox({ clientId });
  const authUrl = dbx.getAuthenticationUrl('http://localhost:3000');
  return authUrl;
};

const getAllFiles = (token) => {
  const dbx = new Dropbox({ accessToken: token });
  return dbx.filesListFolder({ path: '' })
    .then(response => response.entries)
    .catch(err => err);
};

export default {
  getAuthUrl,
  getAllFiles,
};
