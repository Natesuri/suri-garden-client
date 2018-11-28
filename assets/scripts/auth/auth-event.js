const getFormFields = require('../../../lib/get-form-fields.js')

const authApi = require('../auth/auth-api.js')
const authUi = require('../auth/auth-ui.js')

// const launchAuthModal = function () {
//   $('#authModal').modal('show').modal({
//     keyboard: false,
//     backdrop: 'static'
//   })
// }

const addAuthEventHandlers = function () {

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
    .catch(authUi.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  launchAuthModal,
  addAuthEventHandlers
}
