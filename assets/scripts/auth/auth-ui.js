const userStore = require('../userStore.js')
const plotEvents = require('../plot/event.js')

const clearUserErrorMessage = function () {
  $('#user-auth-message').text('')
}

const clearUserForms = function () {
  $('.sign-up-form').val('')
  $('.sign-in-form').val('')
}

const signUpSuccess = apiData => {
  userStore.user = apiData
  // Need user message to say sign up successful
  $('#user-auth-message').text('Sign Up Succesful. Please Sign In')

  // switch to sign in
  hideForms()
  $('#sign-in').toggleClass('hidden')

  // clear error message
  clearUserErrorMessage()

  // clear sign-up-form
  clearUserForms()
}

const signUpFailure = apiData => {
  // Tell user to retry signup
  $('#user-auth-message').text('Sign Up Failed. Please try again.')
  // console.error('signUpFailiure ran. Data is:', apiData)
}

const signInSuccess = apiData => {
  userStore.user = apiData
  const userName = userStore.user.user.email
  // welcome message for user
  console.log(userName)
  $('#username').text('Welcome!')
  $('#userModalLabel').text(userName)
  $('#authModal').modal('hide')

  // clear any error message
  clearUserErrorMessage()

  // clear sign-in-form form
  clearUserForms()
  // console.log('signInSuccess ran. Data is:', apiData)

  // initializePlots
  plotEvents.initializePlots()
}

const signInFailure = apiData => {
  // tell the user about sign in failure
  $('#user-auth-message').text('Login Failed. Please try again.')

  // console.error('signInFaliure ran. Data is:', apiData)
}

const signOutSuccess = function (apiData) {
  // Tell user they've signed out
  $('#username').text('See you soon!')
  $('#userModal').modal('hide')
  $('#plot-holder').text('')

  clearAfterTime()

  // clear error messages
  // clearUserErrorMessage()

  // clear any message

  // console.log('signOutSuccess ran. Data is:', apiData)

  // clear user store
  userStore.user = {}
  return 'promise'
}

const clearAfterTime = function () {
  setTimeout(() => {
    $('#username').text('')
  }, 4000)
}

const signOutFailure = function (apiData) {
  // sign out faliure message

  // console.error('signOutFaliure ran. Data is:', apiData)

  // userStore.user = {}
}

const changePasswordSuccess = function (apiData) {
  // tell user about password change success
  $('#user-message').text('Change Password Succesful')
  $('#userModal').modal('hide')
  $('#change-password-form').modal('hide')

  // clear password form
  $('.pass-form').val('')
  // console.log('changePasswordSuccess ran. Data is:', apiData)
}

const changePasswordFailure = function (apiData) {
  // tell user of pass change failure

// clear password form
  $('.pass-form').val('')
}

const showSignIn = function (event) {
  event.preventDefault()
  console.log(event)
  hideForms()
  $('#sign-in').toggleClass('hidden')
  clearUserForms()
}

const showSignUp = function (event) {
  event.preventDefault()
  console.log(event)
  hideForms()
  $('#sign-up').toggleClass('hidden')
  clearUserForms()
}

const hideForms = function () {
  clearUserErrorMessage()
  if (!$('#sign-in').hasClass('hidden')) {
    $('#sign-in').toggleClass('hidden')
  }
  if (!$('#sign-up').hasClass('hidden')) {
    $('#sign-up').toggleClass('hidden')
  }
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFailure,
  signOutFailure,
  changePasswordFailure,
  showSignIn,
  showSignUp
}
