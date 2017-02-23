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
      currentFile: null,
    }
  }
  componentWillMount() {
    const hash = this.props.location.hash
    const accessToken = localstorage.getAccessToken() || dropbox.getAccessToken(hash)
    const currentFile = localstorage.getCurrentFile()
    const accountId = localstorage.getAccountId()
    this.setState({ accessToken, currentFile })
    if (accountId) {
      fbase.userIsNew(accountId)
        .then((isNew) => {
          if (!isNew) {
            dropbox.uploadWelcomeFile(accessToken)
              .then((file) => {
                this.setState({ currentFile: file.path_display })
                localStorage.setItem('currentFile', file.path_display)
              })
          }
        })
      dropbox.getUserAccount(accessToken)
        .then(response => fbase.saveUser(response))
    }
  }
  isAuthenticated() {
    return this.state.accessToken
  }
  render() {
    return (
      <div>
        { this.isAuthenticated() ? (
          <Editor
            accessToken={this.state.accessToken}
            currentFile={this.state.currentFile}
          />
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
