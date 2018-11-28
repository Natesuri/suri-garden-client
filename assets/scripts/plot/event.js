const api = require('./api.js')
const ui = require('./ui.js')

// Load users plots into the Plots page.
const initializePlots = function () {
  api.getPlots()
    .then(ui.getPlotsSuccess)
    .catch()
}

module.exports = {
  initializePlots
}
