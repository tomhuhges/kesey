const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return userData ? userData.access_token : null
}

const getAccountId = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return userData ? userData.account_id : null
}

const localstorage = {
  getAccountId,
  getAccessToken,
}

export default localstorage
