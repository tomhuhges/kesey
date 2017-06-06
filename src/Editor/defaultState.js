const defaultState = {
  folderIsLoading: false,
  currentFolder: '',
  folder: [],
  fileIsLoading: false,
  currentFile: {
    name: '',
    path_lower: '',
  },
  content: '',
  isTyping: false,
  lastEdit: +new Date(),
  getFolderError: null,
  getFileError: null,
  autosaveMessage: '',
  autosaveError: null,
  menuOpen: false,
};

export default defaultState;
