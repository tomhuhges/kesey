const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return userData ? userData.access_token : null
}

const getAccountId = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return userData ? userData.account_id : null
}

const getCurrentFile = () =>
  localStorage.getItem('currentFile')

const localstorage = {
  getAccountId,
  getAccessToken,
  getCurrentFile,
}

export default localstorage
