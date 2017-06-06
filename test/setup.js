import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// get CodeMirror to render in tests
global.getComputedStyle = window.getComputedStyle;
const createRangeObj = {
  setEnd: () => {},
  setStart: () => {},
  getBoundingClientRect: () => {},
  getClientRects: () => [],
};
global.window.document.createRange = () => createRangeObj;
