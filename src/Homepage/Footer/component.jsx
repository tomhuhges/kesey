import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

class Footer extends React.Component {
  render() {
    const { bg, highlight } = this.props;
    return (
      <div className={`${styles.container} ${bg}`}>
        <div className={styles.inner}>
          <h1 className={`${styles.h1} ${highlight}`}>Kesey</h1>
          <p className={styles.p}>Made with <span className={highlight}>💘</span> by <a className={highlight} href="https://github.com/tomhuhges">@tomhuhges</a></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps)(Footer);
