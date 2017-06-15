import React, { PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import Loading from '../Loading/component';
import EditorEmptyState from '../EditorEmptyState/component';
import styles from './styles';

require('../../node_modules/codemirror/mode/gfm/gfm');

const options = {
  mode: 'gfm',
  indentWithTabs: true,
  lineWrapping: true,
  autofocus: true,
};

const EditorMain = (props) => {
  const { currentFile, fileIsLoading, content, isTyping } = props;
  if (fileIsLoading) {
    return <Loading />;
  } else if (currentFile.name === '') {
    return <EditorEmptyState />;
  }
  return (
    <CodeMirror
      className={styles.container}
      value={content}
      onChange={isTyping}
      options={options}
    />
  );
};

EditorMain.propTypes = {
  currentFile: PropTypes.object.isRequired,
  fileIsLoading: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  isTyping: PropTypes.func.isRequired,
};

export default EditorMain;
