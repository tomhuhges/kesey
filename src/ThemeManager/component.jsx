import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Auth from '../Auth/component';

class ThemeManager extends Component {
  render() {
    return (
      <Auth location={this.props.location} />
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme,
});

export default connect(mapStateToProps, actions)(ThemeManager);
