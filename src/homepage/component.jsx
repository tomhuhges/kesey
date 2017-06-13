import React from 'react';
import dropbox from '../services/dropbox';
import styles from './styles';
import Header from './Header/component';
import Hero from './Hero/component';
import Features from './Features/component';
import Footer from './Footer/component';

class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <Header />
          <Hero />
          <Features />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
