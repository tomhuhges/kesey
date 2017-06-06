import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import editor from './Editor/reducer';

export default combineReducers({
  auth,
  editor,
});
