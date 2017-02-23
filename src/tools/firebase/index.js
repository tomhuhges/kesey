import firebase from 'firebase'

const createValidFirebaseObject = (userInfo) => {
  const validUserInfo = {
    accountId: userInfo.account_id,
    name: userInfo.name,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
    disabled: userInfo.disabled,
    local: userInfo.locale,
    referralLink: userInfo.referral_link,
    isPaired: userInfo.is_paired,
    country: userInfo.country,
  }
  // Firebase won't accept 'undefined' as a valid property value
  // so we need to add Dropbox's optional props only if they != undefined
  if (userInfo.profile_photo_url) {
    validUserInfo.profilePhotoUrl = userInfo.profile_photo_url
  }
  if (userInfo.team_member_id) {
    validUserInfo.teamMemberId = userInfo.team_member_id
  }
  // Firebase won't accept property keys with '.' in them
  // so we need to rename these
  if (userInfo.account_type) {
    const validAccountType = { tag: userInfo.account_type['.tag'] }
    validUserInfo.accountType = validAccountType
  }
  if (userInfo.team) {
    const validTeam = {
      id: userInfo.team.id,
      name: userInfo.team.name,
      sharingPolicies: {
        sharedFolderMemberPolicy: {
          tag: userInfo.team.sharing_policies.shared_folder_member_policy['.tag'],
        },
        sharedFolderJoinPolicy: {
          tag: userInfo.team.sharing_policies.shared_folder_join_policy['.tag'],
        },
        sharedLinkCreatePolicy: {
          tag: userInfo.team.sharing_policies.shared_link_create_policy['.tag'],
        },
      },
    }
    validUserInfo.team = validTeam
  }
  return validUserInfo
}

const userIsNew = (accountId) => {
  const users = firebase.database().ref('users')
  return users.once('value')
    .then((snapshot) => {
      if (snapshot.val()[accountId]) {
        return false
      }
      return true
    })
    .catch(err => console.error(err))
}

const saveUser = (userInfo) => {
  const validUserInfo = createValidFirebaseObject(userInfo)
  const users = firebase.database().ref('users')
  users.child(validUserInfo.accountId).set(validUserInfo)
    .catch(err => console.log(err))
}

const fbase = {
  userIsNew,
  saveUser,
}

export default fbase
