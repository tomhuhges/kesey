import React, { Component, PropTypes } from 'react';
import Loading from '../Loading/component';
import styles from './styles';

class EditorMenu extends Component {
  moveUpDirectory(currentFolder) {
    const upDirectory = currentFolder.substr(0, currentFolder.lastIndexOf('/'));
    this.props.getFolder(upDirectory);
  }
  render() {
    const {
      getFolder,
      folderIsLoading,
      currentFolder,
      folder,
      getFile,
      createFile,
      logout,
      menuOpen,
    } = this.props;
    return (
      <div className={menuOpen ? styles.container : `${styles.container} ${styles.closed}`}>
        <button
          className={styles.newFile}
          onClick={() => createFile(currentFolder)}
        >New File</button>
        <div>
          <div className={styles.directoryContainer}>
            <div className={styles.directory}>
              {currentFolder === '' ? (
                <span><button className={styles.directoryButtonRoot}>&#x2b11;</button> /</span>
              ) : (
                <span>
                  <button
                    className={styles.directoryButton}
                    onClick={() => this.moveUpDirectory(currentFolder)}
                  >&#x2b11;</button> /
                  {currentFolder.split('/').pop()}
                </span>
              )}
            </div>
          </div>
          { folderIsLoading ? (
            <Loading />
          ) : (
            folder.map((entry) => {
              if (entry['.tag'] === 'folder') {
                return (
                  <div
                    className={styles.folderItemContainer}
                    key={entry.id}
                  >
                    <button
                      className={styles.folderItem}
                      onClick={() => getFolder(entry.path_display)}
                    >{entry.name}</button>
                  </div>
                );
              }
              return (
                <div
                  className={styles.folderItemContainer}
                  key={entry.id}
                >
                  <button
                    className={styles.folderItem}
                    onClick={() => getFile(entry)}
                  >{entry.name}</button>
                </div>
              );
            })
          )}
        </div>
        <button className={styles.logout} onClick={logout}>Log Out</button>
      </div>
    );
  }
}

EditorMenu.propTypes = {
  getFolder: PropTypes.func.isRequired,
  folderIsLoading: PropTypes.bool.isRequired,
  currentFolder: PropTypes.string.isRequired,
  folder: PropTypes.array.isRequired,
  getFile: PropTypes.func.isRequired,
  createFile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default EditorMenu;
