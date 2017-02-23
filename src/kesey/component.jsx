import React from 'react'
import dropbox from '../tools/dropbox'
import fbase from '../tools/firebase'
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
    const hash = this.props.location.hash
    const accessToken = localstorage.getAccessToken() || dropbox.getAccessToken(hash)
    this.setState({ accessToken })
    dropbox.getUserAccount(accessToken)
      .then(response => fbase.saveUser(response))
    if (!fbase.userExists(localstorage.getAccountId())) {
      dropbox.uploadFile('../../public/Welcome.md')
    }
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
