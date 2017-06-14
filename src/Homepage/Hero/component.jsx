import React from 'react';
import { connect } from 'react-redux';
import dropbox from '../../services/dropbox';
import dropboxLogo from '../../../src/assets/dropbox-logo.svg';
import googleDriveLogo from '../../../src/assets/google-drive-logo.svg';
import HeroAnimation from '../HeroAnimation/component';
import styles from './styles';

class Hero extends React.Component {
  render() {
    const { bg, text, highlight, herop, gdbutton } = this.props;
    return (
      <div className={`${styles.container} ${bg} ${text}`}>
        <div className={styles.inner}>
          <div className={styles.copy.container}>
            <div>
              <h1 className={`${styles.copy.h1} ${highlight}`}>Kesey</h1>
              <h2 className={styles.copy.h2}>A minimalist Markdown notepad for the browser.</h2>
            </div>
            <div className={styles.copy.pdiv}>
              <p className={`${styles.copy.p} ${herop}`}>
                {`Kesey is a place to store and edit your markdown files
                  from anywhere. No apps here - use any browser on your
                  phone or desktop and start writing.`}
              </p>
            </div>
            <div>
              <a className={styles.copy.a} href={dropbox.getAuthUrl()}>
                <button className={styles.copy.dbbutton}>
                  <img className={styles.copy.buttonlogo} src={dropboxLogo} alt="Dropbox logo" />
                  <span>Sign in with Dropbox</span>
                </button>
              </a>
              <a className={styles.copy.a}>
                <button className={`${styles.copy.gdbutton} ${gdbutton}`}>
                  <div className="container">
                    <img className={styles.copy.buttonlogo} src={googleDriveLogo} alt="Google Drive logo" />
                    <span>Sign in with Google Drive</span>
                    <span className={styles.copy.gdbuttonspan}>Coming soon</span>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <HeroAnimation />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps)(Hero);
