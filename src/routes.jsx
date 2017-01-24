import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import Kesey from './kesey/component'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Kesey} />
    {/* <route path="code" component={CodePage} /> */}
  </Route>
)
