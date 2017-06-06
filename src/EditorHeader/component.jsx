import React, { PropTypes } from 'react';
import styles from './styles';

const EditorHeader = props => (
  <div className={styles.container}>
    <button className={styles.button} onClick={props.toggleMenu}>&#x2630;</button>
    { props.filename ? (
      <div>
        <span>{props.filename}</span>
        {/* <input
          type="text"
          onChange={() => null}
          value={props.filename.split('.').shift()}
        />
        <span>.md</span> */}
      </div>
    ) : (
      <p>Kesey</p>
    )}
    <button className={styles.buffer}>&#x2630;</button>
  </div>
);

EditorHeader.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
};

export default EditorHeader;
