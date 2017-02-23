import Dropbox from 'dropbox'
import clientId from './keys/clientId'

const getAuthUrl = () => {
  const dbx = new Dropbox({ clientId })
  const authUrl = dbx.getAuthenticationUrl('http://localhost:8080')
  return authUrl
}

const getAccessToken = (urlHash) => {
  const userData = {}
  if (urlHash) {
    let hash
    if (urlHash[0] === '#') hash = urlHash.substring(1)
    hash.split('&').forEach((parameter) => {
      const param = parameter.split('=')
      userData[param[0]] = param[1].replace(/%3A/g, ':')
    })
    localStorage.setItem('userData', JSON.stringify(userData))
  }
  return userData.access_token
}

const getWelcomeFileContent = path =>
  fetch(path)
    .then(response => response.blob())
    .catch(err => console.error(err))

const getFileCommitInfo = (path) => {
  const commitInfo = {
    path: '/Welcome.md',
    mode: {
      '.tag': 'add',
    },
    autorename: true,
    mute: false,
  }
  return getWelcomeFileContent(path)
    .then((blob) => {
      commitInfo.contents = blob
      return commitInfo
    })
    .catch(err => console.error(err))
}

const uploadWelcomeFile = accessToken =>
  getFileCommitInfo('../../../public/Welcome.md')
    .then((response) => {
      const dbx = new Dropbox({ accessToken })
      return dbx.filesUpload(response)
        .then(metadata => metadata)
        .catch(err => console.error(err))
    })

const getAllFiles = accessToken =>
  new Promise((resolve, reject) => {
    const dbx = new Dropbox({ accessToken })
    const files = []
    dbx.filesListFolder({ path: '' })
      .then((response) => {
        response.entries.forEach((entry) => {
          const file = {
            tag: entry['.tag'],
            name: entry.name,
            content: null,
          }
          files.push(file)
        })
        resolve(files)
      })
      .catch(err => reject(console.error(err.error)))
  })

const getFileContent = (path, accessToken) =>
  new Promise((resolve, reject) => {
    const dbx = new Dropbox({ accessToken })
    dbx.filesDownload({ path })
      .then((result) => {
        const reader = new FileReader()
        reader.onload = (() => e => resolve(e.target.result))()
        reader.readAsText(result.fileBlob)
      })
      .catch(err => console.error(err.error))
  })

const getUserAccount = accessToken =>
  new Promise((resolve, reject) => {
    const dbx = new Dropbox({ accessToken })
    dbx.usersGetCurrentAccount()
      .then(result => resolve(result))
      .catch(err => reject(console.error(err.error)))
  })

const dropbox = {
  getAuthUrl,
  getAccessToken,
  uploadWelcomeFile,
  getAllFiles,
  getFileContent,
  getUserAccount,
}

export default dropbox
