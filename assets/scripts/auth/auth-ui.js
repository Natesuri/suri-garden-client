const userStore = require('../userStore.js')
// const plotEvents = require('../plot/event.js')

const clearUserErrorMessage = function () {
  $('#user-auth-message').text('')
  $('#sign-up-email-error').text('')
  $('#sign-up-password-error').text('')
  $('#sign-up-password_confirmation-error').text('')
  $('#sign-in-error').text('')
  $('#sign-up-error').text('')
}

const clearUserForms = function () {
  $('.sign-up-form').val('')
  $('.sign-in-form').val('')
}

const signUpSuccess = apiData => {
  // clear forms
  clearUserForms()
  // clear error message
  clearUserErrorMessage()
  userStore.user = apiData

  // switch to sign in
  hideForms()
  $('#sign-in').toggleClass('hidden')
  // Need user message to say sign up successful
  $('#user-auth-message').text('Sign Up Succesful. Please Sign In')
}

const signUpFailure = apiData => {
  clearUserErrorMessage()
  // Tell user to retry signup
  // $('#user-auth-message').text('Sign Up Failed. Please try again.')
  // console.error(apiData)
  if (apiData.statusText === 'error') {
    $('#sign-up-error').text('Something went wrong. Please try again')
  } else {
    $('#sign-up-email-error').text(apiData.responseJSON.email)
    $('#sign-up-password-error').text(apiData.responseJSON.password)
    $('#sign-up-password_confirmation-error').text(apiData.responseJSON.password_confirmation)
  }
  // console.error('signUpFailiure ran. Data is:', apiData)
}

const signInSuccess = apiData => {
  userStore.user = apiData
  const userName = userStore.user.user.email
  // welcome message for user
  // console.log(userName)
  $('#welcome').text('Welcome!')
  $('#userModalLabel').text(userName)
  $('#authModal').modal('hide')

  // clear any error message
  clearUserErrorMessage()

  // clear sign-in-form form
  clearUserForms()
  // console.log('signInSuccess ran. Data is:', apiData)

  // initializePlots
  // plotEvents.initializePlots()
  return ''
}

const signInFailure = apiData => {
  clearUserErrorMessage()
  // tell the user about sign in failure
  // $('#user-auth-message').text('Login Failed. Please try again.')
  // console.error(apiData)
  if (apiData.statusText === 'Unauthorized') {
    $('#sign-in-error').text('Email password combination is incorrect')
  }
  if (apiData.statusText === 'error') {
    $('#sign-in-error').text('Something went wrong. Please try again')
  }
  // console.error('signInFaliure ran. Data is:', apiData)
}

const signOutSuccess = function (apiData) {
  // Tell user they've signed out
  $('#welcome').text('See you soon!')
  $('#userModal').modal('hide')
  $('#plot-holder').text('')

  clearAfterTime()

  // clear error messages
  clearUserErrorMessage()

  // console.log('signOutSuccess ran. Data is:', apiData)
  return ''
}

const clearAfterTime = function () {
  setTimeout(() => {
    $('#welcome').text('')
  }, 4000)
}

const signOutFailure = function (apiData) {
  // console.log(apiData)
  // sign out faliure message
  $('#user-auth-error').text('Something went wrong. Close application to complete signout.')
  // console.error('signOutFaliure ran. Data is:', apiData)

  userStore.user = {}
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
  // console.log(apiData)

  // clear password form
  $('.pass-form').val('')
}

const showSignIn = function (event) {
  event.preventDefault()
  // console.log(event)
  hideForms()
  $('#sign-in').toggleClass('hidden')
  clearUserForms()
}

const showSignUp = function (event) {
  event.preventDefault()
  // console.log(event)
  hideForms()
  $('#sign-up').toggleClass('hidden')
  clearUserForms()
}

const showChangePassword = function () {
  event.preventDefault()
  $('#change-password-form').toggleClass('hidden')
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
  showSignUp,
  showChangePassword
}
