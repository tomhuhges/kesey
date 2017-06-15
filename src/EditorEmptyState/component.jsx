import React, { Component } from 'react';
import styles from './styles';

class EditorEmptyState extends Component {
  render() {
    return (
      <div className={styles.container}>
        Click the menu button to open a file.
      </div>
    );
  }
}

export default EditorEmptyState;
