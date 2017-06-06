import React, { Component, PropTypes } from 'react';
import styles from './styles';

class EditorFooter extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className={styles.container}>
        <p>{message}</p>
      </div>
    );
  }
}

EditorFooter.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EditorFooter;
