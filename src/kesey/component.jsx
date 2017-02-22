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
  componentDidMount() {
    this.getAccessTokenFromUrl()
  }
  getAuthUrl() {
    const dbx = new Dropbox({ clientId })
    const authUrl = dbx.getAuthenticationUrl('http://localhost:8080/edit')
    return authUrl
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
    }
    this.setState({ accessToken: params.access_token })
  }
  isAuthenticated() {
    if (this.state.accessToken) {
      browserHistory.push('/edit')
    }
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
