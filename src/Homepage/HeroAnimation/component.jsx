import React from 'react';
import Typist from 'react-typist';
import styles from './styles';

class HeroAnimation extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="cloud"></div>
        <div className="screen left" />
        <div className="screen right" />
        <div className="screen">
          <div className="screen__left" />
          <div className="screen__top">
            <div className="screen__buttons">
              <div className="screen__button" />
              <div className="screen__button" />
              <div className="screen__button" />
            </div>
            <div className="screen__searchbar">
              <div className="screen__bar" />
            </div>
          </div>
          <div className="screen__text">
            <Typist
              avgTypingDelay={500}
              stdTypingDelay={200}
              startDelay={3000}
              cursor={{ blink: true }}
            >Hello world!</Typist>
          </div>
        </div>
        <div className={styles.keyboard}>
          <div className="line">
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
          </div>
          <div className="line">
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
          </div>
          <div className="line">
            <div className="key" />
            <div className="key space" />
            <div className="key" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroAnimation;
