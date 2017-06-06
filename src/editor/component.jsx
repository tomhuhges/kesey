import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import EditorHeader from '../EditorHeader/component';
import EditorMenu from '../EditorMenu/component';
import EditorMain from '../EditorMain/component';
import EditorFooter from '../EditorFooter/component';
import * as actions from './actions';
import styles from './styles';

class Editor extends Component {
  componentDidMount() {
    const { getFolder, currentFolder, getFile, currentFile } = this.props;
    getFolder(currentFolder)
      .then(() => getFile(currentFile));
  }
  render() {
    const {
      getFolder,
      folderIsLoading,
      currentFolder,
      folder,
      getFile,
      createFile,
      fileIsLoading,
      currentFile,
      content,
      isTyping,
      autosaveMessage,
      logout,
      toggleMenu,
      menuOpen,
    } = this.props;
    return (
      <div className={menuOpen ? `${styles.container} ${styles.menuOpen}` : styles.container}>
        <EditorMenu
          getFolder={getFolder}
          folderIsLoading={folderIsLoading}
          currentFolder={currentFolder}
          folder={folder}
          getFile={getFile}
          createFile={createFile}
          currentFile={currentFile}
          logout={logout}
          menuOpen={menuOpen}
        />
        <div className={styles.innerContainer}>
          <EditorHeader
            toggleMenu={toggleMenu}
            filename={currentFile.name}
          />
          <EditorMain
            fileIsLoading={fileIsLoading}
            content={content}
            isTyping={isTyping}
            menuOpen={menuOpen}
          />
          <EditorFooter
            message={autosaveMessage}
            content={content}
          />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  getFolder: PropTypes.func.isRequired,
  folderIsLoading: PropTypes.bool.isRequired,
  currentFolder: PropTypes.string.isRequired,
  folder: PropTypes.array.isRequired,
  getFile: PropTypes.func.isRequired,
  createFile: PropTypes.func.isRequired,
  fileIsLoading: PropTypes.bool.isRequired,
  currentFile: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  isTyping: PropTypes.func.isRequired,
  autosaveMessage: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  folderIsLoading: state.editor.folderIsLoading,
  currentFolder: state.editor.currentFolder,
  folder: state.editor.folder,
  fileIsLoading: state.editor.fileIsLoading,
  currentFile: state.editor.currentFile,
  content: state.editor.content,
  autosaveMessage: state.editor.autosaveMessage,
  menuOpen: state.editor.menuOpen,
});

export default connect(mapStateToProps, actions)(Editor);
