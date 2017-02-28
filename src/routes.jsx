import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Kesey from './kesey/component'
import Homepage from './homepage/component'
import Editor from './editor/component'
import Login from './login/component'

export default (
  <Route path="/" component={App}>
    <Route path="" component={Kesey}>
      <IndexRoute component={Homepage} />
      <route path="edit/:file" component={Editor} />
      <route path="login" component={Login} />
    </Route>
  </Route>
)
