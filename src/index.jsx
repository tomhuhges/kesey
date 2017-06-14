import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from './services/firebase/';
import store from './store';
import ThemeManager from './ThemeManager/component';
import './css/style.css';

firebase.initializeApp(firebase.config);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={ThemeManager} />
    </Router>
  </Provider>,
  document.getElementById('root'));
