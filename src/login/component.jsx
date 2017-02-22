import React from 'react'
import Dropbox from 'dropbox'
import clientId from '../apiKeys'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }
  }
  getFiles() {
    const dbx = new Dropbox({ accessToken: this.getAccessTokenFromUrl() })
    const files = []
    dbx.filesListFolder({ path: '' })
      .then((response) => {
        response.entries.forEach((entry) => {
          const file = {
            tag: entry['.tag'],
            name: entry.name,
            content: null,
          }
          files.push(file)
          this.setState({ files })
          if (file.tag === 'file') {
            dbx.filesDownload({ path: entry.path_display })
            .then((result) => {
              const reader = new FileReader()
              reader.onload = (data => (e) => {
                file.content = `${e.target.result.substring(0, 100)}...`
                this.setState({ files })
              })()
              reader.readAsText(result.fileBlob)
            })
            .catch(err => console.error(err.error))
          }
        })
      })
      .catch(err => console.error(err.error))
  }
  isAuthenticated() {
    return !!this.getAccessTokenFromUrl()
  }
  render() {
    return (
      <div>
        <a href={this.props.authUrl}>Sign in with Dropbox</a>
        {/* { this.isAuthenticated() ? (
          <ul>
            {this.state.files.map(file => (
              <div key={file.name}>
                <li >{`[${file.tag}] ${file.name}`}</li>
                <p>{file.content}</p>
              </div>
            ))}
          </ul>
        ) : (
          <a href={this.props.authUrl}>Sign in with Dropbox</a>
        )} */}
      </div>
    )
  }
}

Login.propTypes = {
  authUrl: React.PropTypes.string.isRequired,
}

export default Login
