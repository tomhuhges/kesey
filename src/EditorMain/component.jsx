import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import Loading from '../Loading/component';
import styles from './styles';

require('../../node_modules/codemirror/mode/gfm/gfm');

const options = {
  mode: 'gfm',
  indentWithTabs: true,
  lineWrapping: true,
  autofocus: true,
};

const EditorMain = (props) => {
  const { fileIsLoading, content, isTyping } = props;
  return fileIsLoading ? (
    <Loading />
  ) : (
    <CodeMirror
      className={styles.container}
      value={content}
      onChange={isTyping}
      options={options}
    />
  );
};

EditorMain.propTypes = {
  fileIsLoading: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  isTyping: PropTypes.func.isRequired,
};

export default EditorMain;
