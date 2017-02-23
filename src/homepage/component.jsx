import React from 'react'
import { browserHistory } from 'react-router'
import Login from '../login/component'

class Homepage extends React.Component {
  componentDidMount() {
    browserHistory.push('')
  }
  render() {
    return (
      <div className="code mid-gray mh3">
        Kesey
        <Login authUrl={this.props.authUrl} />
      </div>
    )
  }
}

Homepage.propTypes = {
  authUrl: React.PropTypes.string.isRequired,
}

export default Homepage
