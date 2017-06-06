import Dropbox from 'dropbox';
import {
  GET_FOLDER_REQUEST,
  GET_FOLDER_SUCCESS,
  GET_FOLDER_FAILURE,
  UPDATE_CURRENT_FOLDER,
  GET_FILE_REQUEST,
  GET_FILE_SUCCESS,
  GET_FILE_FAILURE,
  UPDATE_CURRENT_FILE,
  CREATE_FILE_REQUEST,
  CREATE_FILE_SUCCESS,
  CREATE_FILE_FAILURE,
  TYPING,
  TYPING_STOPPED,
  AUTOSAVE_FILE_REQUEST,
  AUTOSAVE_FILE_SUCCESS,
  AUTOSAVE_FILE_FAILURE,
  TOGGLE_MENU,
} from './constants';

export const getFolderRequest = () => (
  {
    type: GET_FOLDER_REQUEST,
    payload: { folderIsLoading: true },
  }
);

export const getFolderSuccess = folder => (
  {
    type: GET_FOLDER_SUCCESS,
    payload: { folderIsLoading: false, folder },
  }
);

export const getFolderFailure = getFolderError => (
  {
    type: GET_FOLDER_FAILURE,
    payload: { folderIsLoading: false, getFolderError },
  }
);

export const updateCurrentFolder = (currentFolder) => {
  let storage = JSON.parse(localStorage.getItem('editor'));
  storage = Object.assign({}, storage, { currentFolder });
  localStorage.setItem('editor', JSON.stringify(storage));
  return {
    type: UPDATE_CURRENT_FOLDER,
    payload: { currentFolder },
  };
};

export const getFolder = path => (
  (dispatch, getState) => {
    const accessToken = getState().auth.token;
    dispatch(getFolderRequest());
    const dbx = new Dropbox({ accessToken });
    return dbx.filesListFolder({ path })
      .then((response) => {
        const folder = response.entries.filter(entry => (
          entry['.tag'] === 'folder' || entry.name.split('.').pop() === 'md'
        ));
        dispatch(getFolderSuccess(folder));
        dispatch(updateCurrentFolder(path));
        return folder;
      })
      .catch(err => dispatch(getFolderFailure(err)));
  }
);

export const getFileRequest = () => (
  {
    type: GET_FILE_REQUEST,
    payload: { fileIsLoading: true },
  }
);

export const getFileSuccess = content => (
  {
    type: GET_FILE_SUCCESS,
    payload: { fileIsLoading: false, content },
  }
);

export const getFileFailure = getFileError => (
  {
    type: GET_FILE_FAILURE,
    payload: { fileIsLoading: false, getFileError },
  }
);

export const updateCurrentFile = (currentFile) => {
  let storage = JSON.parse(localStorage.getItem('editor'));
  storage = Object.assign({}, storage, { currentFile });
  localStorage.setItem('editor', JSON.stringify(storage));
  return {
    type: UPDATE_CURRENT_FILE,
    payload: { currentFile },
  };
};

export const getFile = file => (
  (dispatch, getState) => {
    const accessToken = getState().auth.token;
    const dbx = new Dropbox({ accessToken });
    dispatch(getFileRequest());
    return dbx.filesDownload({ path: file.path_display })
      .then(
        (response) => {
          const reader = new FileReader();
          reader.onload = e => dispatch(getFileSuccess(e.target.result));
          reader.readAsText(response.fileBlob);
          dispatch(updateCurrentFile(file));
          dispatch(updateCurrentFolder(file.path_display.substr(0, file.path_lower.lastIndexOf('/'))));
        },
        err => dispatch(getFileFailure(err)));
  }
);

export const createFileRequest = () => (
  {
    type: CREATE_FILE_REQUEST,
    payload: { fileIsLoading: true },
  }
);

export const createFileSuccess = () => (
  {
    type: CREATE_FILE_SUCCESS,
    payload: { fileIsLoading: false },
  }
);

export const createFileFailure = createFileError => (
  {
    type: CREATE_FILE_FAILURE,
    payload: { fileIsLoading: false, createFileError },
  }
);

export const createFile = path => (
  (dispatch, getState) => {
    const newFile = new Blob([''], { type: 'text/plain' });
    const accessToken = getState().auth.token;
    const dbx = new Dropbox({ accessToken });
    dispatch(createFileRequest());
    return dbx.filesUpload({
      contents: newFile,
      path: `${path}/Untitled.md`,
      mode: { '.tag': 'add' },
      autorename: true,
      mute: true,
    })
    .then(
      (response) => {
        dispatch(createFileSuccess());
        dispatch(getFolder(path));
        dispatch(getFile(response));
      },
      err => dispatch(createFileFailure(err)));
  }
);

export const typing = (content, lastEdit) => {
  const payload = {
    isTyping: true,
    content,
    lastEdit,
  };
  return {
    type: TYPING,
    payload,
  };
};

export const typingStopped = () => {
  const payload = {
    isTyping: false,
  };
  return {
    type: TYPING_STOPPED,
    payload,
  };
};

export const autosaveFileRequest = () => (
  {
    type: AUTOSAVE_FILE_REQUEST,
    payload: { autosaveMessage: 'Saving...' },
  }
);

export const autosaveFileSuccess = currentFile => (
  {
    type: AUTOSAVE_FILE_SUCCESS,
    payload: { autosaveMessage: '', currentFile },
  }
);

export const autosaveFileFailure = autosaveError => (
  {
    type: AUTOSAVE_FILE_FAILURE,
    payload: { autosaveMessage: '', autosaveError },
  }
);

export const autosaveFile = content => (
  (dispatch, getState) => {
    const accessToken = getState().auth.token;
    const currentFile = getState().editor.currentFile;
    const dbx = new Dropbox({ accessToken });
    const file = new Blob([content], { type: 'text/plain' });
    dispatch(autosaveFileRequest());
    return dbx.filesUpload({
      contents: file,
      path: currentFile.path_display,
      mode: {
        '.tag': 'update',
        update: currentFile.rev,
      },
      mute: true,
    })
    .then(
      response => dispatch(autosaveFileSuccess(response)),
      err => dispatch(autosaveFileFailure(err)));
  }
);

export const isTyping = content => (
  (dispatch, getState) => {
    const timestamp = +new Date();
    dispatch(typing(content, timestamp));
    setTimeout(() => {
      const { lastEdit } = getState().editor;
      if (lastEdit === timestamp) {
        dispatch(typingStopped(content));
        dispatch(autosaveFile(content));
      }
    }, 5000);
  }
);

export const toggleMenu = () => {
  let storage = JSON.parse(localStorage.getItem('editor'));
  const menuOpen = storage.menuOpen !== null ? !storage.menuOpen : true;
  storage = Object.assign({}, storage, { menuOpen });
  localStorage.setItem('editor', JSON.stringify(storage));
  return {
    type: TOGGLE_MENU,
  };
};
