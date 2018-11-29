const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Load users plots into the Plots page.
const initializePlots = function () {
  api.getPlots()
    .then(ui.getPlotsSuccess)
    .catch()
    // There must be a better way to do this.
  ui.hidePlotAdder()
}

const addEventHandlers = function () {
  $('#new-plot').on('click', showPlotForm)
  $('#confirm-new-plot').on('submit', onAddPlot)
}

const showPlotForm = function () {
  ui.showPlotAdder()
}

const onAddPlot = function () {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  api.addPlot(data)
    .then(initializePlots())
    .catch()
}

module.exports = {
  initializePlots,
  addEventHandlers
}
