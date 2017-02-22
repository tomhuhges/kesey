import React from 'react'
import Login from '../login/component'

const Homepage = props =>
  <div className="code mid-gray mh3">
    Kesey
    <Login authUrl={props.authUrl} />
  </div>

Homepage.propTypes = {
  authUrl: React.PropTypes.string.isRequired,
}

export default Homepage
