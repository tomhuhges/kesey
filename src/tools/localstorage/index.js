const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return userData ? userData.access_token : null
}

const localstorage = {
  getAccessToken,
}

export default localstorage
