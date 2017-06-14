import { TOGGLE_THEME, SET_DAY_THEME, SET_NIGHT_THEME } from './constants';
import { dayTheme, nightTheme } from '../css/themes';

export const toggleTheme = () => {
  const currentTheme = JSON.parse(localStorage.getItem('theme'));
  const newTheme = currentTheme.name === 'day' ? nightTheme : dayTheme;
  localStorage.setItem('theme', newTheme);
  return {
    type: TOGGLE_THEME,
  };
};

export const setDayTheme = () => {
  localStorage.setItem('theme', dayTheme);
  return {
    type: SET_DAY_THEME,
  };
};

export const setNightTheme = () => {
  localStorage.setItem('theme', nightTheme);
  return {
    type: SET_NIGHT_THEME,
  };
};
