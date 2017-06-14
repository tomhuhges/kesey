import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';

class Feature extends React.Component {
  render() {
    const {
      featuresTitle,
      titleImg,
      titleImgAlt,
      title,
      ps,
      illustration,
      illustrationAlt,
      align
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={align === 'right' ? styles.copyRight : styles.copy}>
          { titleImg ? (
            <img className={styles.titleImg} src={titleImg} alt={titleImgAlt} />
          ) : null }
          <h1 className={`${styles.h1} ${featuresTitle}`}>{title}</h1>
          {ps.map((pText, i) => (
            <p key={i} className={styles.p}>{pText}</p>
          ))}
        </div>
        <div className={align === 'right' ? styles.illustrationRight : styles.illustration}>
          { illustration ? (
            <img src={illustration} alt={illustrationAlt} />
          ) : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps)(Feature);
