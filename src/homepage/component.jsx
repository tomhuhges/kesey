import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import Header from './Header/component';
import Hero from './Hero/component';
import Features from './Features/component';
import Footer from './Footer/component';

class Homepage extends React.Component {
  render() {
    const { bg, text } = this.props;
    return (
      <div className={`${styles.body} ${bg} ${text}`}>
        <div className={styles.container}>
          <div className={`${styles.inner} ${bg}`}>
            <Header />
            <Hero />
            <Features />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps)(Homepage);
