import React from 'react';
import { connect } from 'react-redux';
import Feature from '../Feature/component';
import styles from './styles';

class Features extends React.Component {
  render() {
    const { name, featuresBg, text, featuresTitle, dropboxLogo } = this.props;
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${featuresBg} ${text}`}>
          <div className={`${styles.leftborder} ${name}`} />
          <div className={`${styles.rightborder} ${name}`} />
          <h3 className={styles.h3}>Features</h3>
          <Feature
            titleImg={dropboxLogo}
            titleImgAlt="Dropbox Logo"
            title="Dropbox Integration"
            ps={[
              `Your files will be stored in a special Kesey folder in
              your Dropbox.`,
              `That means you can access them anywhere on the web,
              and they'll also be automagically synced to your computer.`,
            ]}
          />
          <Feature
            title="Syntax Highlighting"
            ps={[
              `Plain Markdown is boring.`,
              `Kesey turns your bold text bold
              and your blockquotes into blockquotes without distracting
              you with a separate Rich Text preview pane.`,
            ]}
            align="right"
          />
          <Feature
            title="Day/Night Mode"
            ps={[
              `Kesey lets you switch between day and night mode for late
              night writing sessions.`,
              `If you're lazy like me, it can also do it automatically.`,
            ]}
          />
          <Feature
            title="Data Insights"
            ps={[
              `Easily see how long you've been writing for today, this month
              or even over the year.`,
              `Check stats like document word count right from the editor.`
            ]}
            align="right"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.theme;

export default connect(mapStateToProps)(Features);
