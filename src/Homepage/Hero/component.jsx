import React from 'react';
import dropbox from '../../services/dropbox';
import dropboxLogo from '../../../src/assets/dropbox-logo.svg';
import HeroAnimation from '../HeroAnimation/component';
import styles from './styles';

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.copy.container}>
          <div>
            <h1 className={styles.copy.h1}>Kesey</h1>
            <h2 className={styles.copy.h2}>A minimal markdown notepad for the browser.</h2>
          </div>
          <div className={styles.copy.pdiv}>
            <p className={styles.copy.p}>Kesey is a place to store and edit your markdown files from anywhere. No apps here - use any browser on your phone or desktop and start writing.</p>
          </div>
          <a className={styles.copy.a} href={dropbox.getAuthUrl()}>
            <button className={styles.copy.button}>
              <img className={styles.copy.buttonlogo} src={dropboxLogo} alt="Dropbox logo" />
              <span className={styles.copy.buttonspan} >Sign in with Dropbox</span>
            </button>
          </a>
        </div>
        <HeroAnimation />
      </div>
    );
  }
}

export default Hero;
