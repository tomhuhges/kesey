import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import firebase from './services/firebase/';
import reducer from './reducers';
import Auth from './Auth/component';
import defaultState from './Editor/defaultState';
import './css/style.css';

const persistedState = {
  auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : { authenticated: false },
  editor: localStorage.getItem('editor') ? Object.assign({}, defaultState, JSON.parse(localStorage.getItem('editor'))) : defaultState,
};

console.log(persistedState)

const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

firebase.initializeApp(firebase.config);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Auth} />
    </Router>
  </Provider>,
  document.getElementById('root'));
