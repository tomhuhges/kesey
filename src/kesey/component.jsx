import React from 'react'
import Dropbox from 'dropbox'
import { browserHistory } from 'react-router'
import clientId from '../apiKeys'
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
    console.log(this.getAccessTokenFromLocalStorage())
    console.log(this.getAccessTokenFromUrl())
    console.log(this.getAccessToken())
    this.setState({ accessToken: this.getAccessToken() })
  }
  getAuthUrl() {
    const dbx = new Dropbox({ clientId })
    const authUrl = dbx.getAuthenticationUrl('http://localhost:8080')
    return authUrl
  }
  getAccessToken() {
    return this.getAccessTokenFromLocalStorage() || this.getAccessTokenFromUrl()
  }
  getAccessTokenFromLocalStorage() {
    return localStorage.getItem('accessToken')
  }
  getAccessTokenFromUrl() {
    const params = {}
    let hash = this.props.location.hash
    if (!hash) {
      params.access_token = null
    } else {
      if (hash[0] === '#') hash = hash.substring(1)
      hash.split('&').forEach((parameter) => {
        const param = parameter.split('=')
        params[param[0]] = param[1]
      })
      localStorage.setItem('accessToken', params.access_token)
      // this.setState({ accessToken: params.access_token })
    }
    return params.access_token
  }
  isAuthenticated() {
    return this.state.accessToken
  }
  render() {
    console.log(this.isAuthenticated())
    return (
      <div>
        { this.isAuthenticated() ? (
          <Editor />
        ) : (
          <Homepage authUrl={this.getAuthUrl()} />
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
