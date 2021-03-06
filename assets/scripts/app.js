'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./plot/event.js')
const authEvents = require('./auth/auth-event.js')
$('#individualPlotView').toggle()

$(() => {
  authEvents.launchAuthModal()
  authEvents.addAuthEventHandlers()
  events.addEventHandlers()
})
