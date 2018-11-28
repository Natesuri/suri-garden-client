const api = require('./api.js')
const ui = require('./ui.js')

// Load users plots into the Plots page.
const initializePlots = function () {
  api.getPlots()
    .then(ui.getPlotsSuccess)
    .catch()
}

const addEventHandlers = function () {
  $('new-plot').on('click', onAddPlot)
}

const onAddPlot = function () {
  api.addPlot()
    .then()
    .catch()
}

module.exports = {
  initializePlots,
  addEventHandlers
}
