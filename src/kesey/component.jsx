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
    this.setState({ accessToken: this.getAccessToken() })
  }
  getAccessToken() {
    return localstorage.getAccessToken() || this.getAccessTokenFromUrl()
  }
  getAccessTokenFromUrl() {
    const userData = {}
    let hash = this.props.location.hash
    if (hash) {
      if (hash[0] === '#') hash = hash.substring(1)
      hash.split('&').forEach((parameter) => {
        const param = parameter.split('=')
        // replace %3A with :
        userData[param[0]] = param[1].replace(/%3A/g, ':')
      })
      localStorage.setItem('userData', JSON.stringify(userData))
    }
    return userData.access_token
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
