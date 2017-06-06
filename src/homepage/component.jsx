import React from 'react';
import dropbox from '../services/dropbox';
import styles from './styles';

class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.h1}>Kesey</h1>
          <a href={dropbox.getAuthUrl()}>
            <button className={styles.button}>Sign in with Dropbox</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Homepage;
