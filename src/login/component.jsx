import React from 'react'
import Dropbox from 'dropbox'

const getAuthUrl = () => {
  const clientId = 'xxxxxxxxxxx'
  const dbx = new Dropbox({ clientId })
  const authUrl = dbx.getAuthenticationUrl('http://localhost:8080/login')
  return authUrl
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }
  }
  componentDidMount() {
    console.log(this.isAuthenticated())
  }
  getAccessTokenFromUrl() {
    let hash = this.props.location.hash
    if (hash[0] === '#') hash = hash.substring(1)
    const params = {}
    hash.split('&').forEach((parameter) => {
      const param = parameter.split('=')
      params[param[0]] = param[1]
    })
    return params.access_token
  }
  getFiles() {
    const dbx = new Dropbox({ accessToken: this.getAccessTokenFromUrl() })
    dbx.filesListFolder({ path: '' })
      .then(response => this.setState({ files: response.entries }))
      .catch(error => console.error(error))
  }
  isAuthenticated() {
    return !!this.getAccessTokenFromUrl()
  }
  render() {
    return (
      <div>
        { this.isAuthenticated() ? (
          <ul>
            {this.state.files.map(file => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <a href={getAuthUrl()}>Sign in with Dropbox</a>
        )}
      </div>
    )
  }
}

Login.propTypes = {
  location: React.PropTypes.shape({
    hash: React.PropTypes.string.isRequired,
  }).isRequired,
}

export default Login
