import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Kesey from './kesey/component'
import Editor from './editor/component'
import Login from './login/component'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Kesey} />
    <route path="edit" component={Editor} />
    <route path="login" component={Login} />
  </Route>
)
