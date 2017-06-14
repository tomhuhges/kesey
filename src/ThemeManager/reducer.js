import { TOGGLE_THEME, SET_DAY_THEME, SET_NIGHT_THEME } from './constants';
import { dayTheme, nightTheme } from '../css/themes';

export default (state = dayTheme, action) => {
  const newTheme = state.name === 'day' ? nightTheme : dayTheme;
  switch (action.type) {
    case TOGGLE_THEME:
      return Object.assign({}, state, newTheme);
    case SET_DAY_THEME:
      return dayTheme;
    case SET_NIGHT_THEME:
      return nightTheme;
    default:
      return state;
  }
};
