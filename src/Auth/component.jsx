import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Editor from '../Editor/component';
import Homepage from '../Homepage/component';
import * as actions from './actions';
import auth from '../services/auth';

class Auth extends Component {
  constructor(props) {
    super(props);
    const params = auth.getParamsFromUrl(this.props.location.hash);
    const token = params.access_token || auth.getToken() || props.token;
    if (token) {
      props.login(token);
    } else {
      if (params.error) {
        props.loginFailure(params.error, params.error_description);
      }
      props.logout();
    }
  }
  render() {
    const { authenticated, login, logout } = this.props;
    return (
      <div>
        { authenticated ? (
          <Editor logout={logout} />
        ) : (
          <Homepage login={login} />
        )}
      </div>
    );
  }
}

Auth.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
  authenticated: PropTypes.bool.isRequired,
  token: PropTypes.string,
  login: PropTypes.func.isRequired,
  // loginRequest: PropTypes.func.isRequired,
  // loginSuccess: PropTypes.func.isRequired,
  loginFailure: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  token: state.auth.token,
});

export default connect(mapStateToProps, actions)(Auth);
