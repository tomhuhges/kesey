import React from 'react';
import styles from './styles';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Kesey</h1>
        <p className={styles.p}>Made with <span className={styles.heart}>💘</span> by <a className={styles.link} href="https://github.com/tomhuhges">@tomhuhges</a></p>
      </div>
    );
  }
}

export default Footer;
