const userStore = require('../userStore.js')

const clearUserErrorMessage = function () {

}

// const hideShowAuth = function () {
// $('#sign-up').toggleClass('hidden')
// $('#sign-in').toggleClass('hidden')
// $('#sign-out').toggleClass('hidden')
// $('#change-password').toggleClass('hidden')
// $('#get-history').toggleClass('hidden')
// }

const signUpSuccess = apiData => {
  userStore.user = apiData
  // Need user message to say sign up successful

  // clear error message
  clearUserErrorMessage()

  // clear sign-up-form
  $('.sign-up-form').val('')
}

const signUpFailure = apiData => {
  // Tell user to retry signup
  // console.error('signUpFailiure ran. Data is:', apiData)
}

const signInSuccess = apiData => {
  userStore.user = apiData
  const userName = userStore.user.user.email
  // welcome message for user
  console.log(userName)

  // clear any error message
  clearUserErrorMessage()

  // clear sign-in-form form
  $('.sign-in-form').val('')
  // console.log('signInSuccess ran. Data is:', apiData)
}

const signInFailure = apiData => {
  // tell the user about sign in failure

  // console.error('signInFaliure ran. Data is:', apiData)
}

const signOutSuccess = function (apiData) {
  // Tell user they've signed out

  // clear error messages
  clearUserErrorMessage()

  // clear any message

  // console.log('signOutSuccess ran. Data is:', apiData)

  // clear user store
  userStore.user = {}
}

const signOutFailure = function (apiData) {
  // sign out faliure message

  // console.error('signOutFaliure ran. Data is:', apiData)

  // userStore.user = {}
}

const changePasswordSuccess = function (apiData) {
  // tell user about password change success

  // clear password form
  $('.pass-form').val('')
  // console.log('changePasswordSuccess ran. Data is:', apiData)
}

const changePasswordFailure = function (apiData) {
  // tell user of pass change failure

// clear password form
  $('.pass-form').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFailure,
  signOutFailure,
  changePasswordFailure
}
