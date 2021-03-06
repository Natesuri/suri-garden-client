const getFormFields = require('../../../lib/get-form-fields.js')

const plotEvents = require('../plot/event.js')
const authApi = require('../auth/auth-api.js')
const authUi = require('../auth/auth-ui.js')

const launchAuthModal = function () {
  $('#authModal').modal('show')
}

const addAuthEventHandlers = function () {
  $('#launch-sign-up').on('click', authUi.showSignUp)
  $('#launch-sign-in').on('click', authUi.showSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#launch-change-password').on('click', authUi.showChangePassword)
  $('#change-password-form').on('submit', onChangePassword)
  $('#user-options').on('click', openUserMenu)
}

const onSignUp = event => {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
  // onSignIn() need to get this to run only after the sign up is successful.
  // .then() is asyncronous, so it doesn't work as currently arranged.
}

const onSignIn = event => {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(plotEvents.initializePlots)
    .catch(authUi.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .then(launchAuthModal)
    .catch(authUi.signOutFailure)
}

// const setChangePassword = function () {
//   // $('userModal').modal('hide')
//   authUi.
// }

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const openUserMenu = function () {
  $('#userModal').modal('show')
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  launchAuthModal,
  addAuthEventHandlers
}
