import React from 'react'

// <ul>
//   {this.state.files.map(file => (
//     <div key={file.name}>
//       <li >{`[${file.tag}] ${file.name}`}</li>
//       <p>{file.content}</p>
//     </div>
//   ))}
// </ul>

const Login = props =>
  <a href={props.authUrl}>Sign in with Dropbox</a>

Login.propTypes = {
  authUrl: React.PropTypes.string.isRequired,
}

export default Login
