import React from 'react'
import Dropbox from 'dropbox'
import dropbox from '../tools/dropbox'
import localstorage from '../tools/localstorage'
import Homepage from '../homepage/component'
import Editor from '../editor/component'

class Kesey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: null,
    }
  }
  componentWillMount() {
    const accessToken = localstorage.getAccessToken() || dropbox.getAccessToken()
    this.setState({ accessToken })
  }
  isAuthenticated() {
    return this.state.accessToken
  }
  render() {
    return (
      <div>
        { this.isAuthenticated() ? (
          <Editor accessToken={this.state.accessToken} />
        ) : (
          <Homepage authUrl={dropbox.getAuthUrl()} />
        )}
      </div>
    )
  }
}

Kesey.propTypes = {
  location: React.PropTypes.shape({
    hash: React.PropTypes.string,
  }).isRequired,
}

export default Kesey
