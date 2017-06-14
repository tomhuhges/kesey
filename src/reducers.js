import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import editor from './Editor/reducer';
import theme from './ThemeManager/reducer';

export default combineReducers({
  auth,
  editor,
  theme,
});
