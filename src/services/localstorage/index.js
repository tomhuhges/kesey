export const getItem = (name) => {
  if (!localStorage.getItem(name)) {
    return undefined;
  }
  return JSON.parse(localStorage.getItem(name));
};

export const itemPropertyExists = (name, prop) => {
  const item = getItem(name);
  if (item && Object.prototype.hasOwnProperty.call(item, prop)) {
    return item[prop];
  }
  return null;
};

export const setItem = (item, data) => {
  const prevState = JSON.parse(localStorage.getItem(item));
  const nextState = JSON.stringify(Object.assign({}, prevState, data));
  localStorage.setItem(item, nextState);
};
