const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// const onGetAllPlots = function () {
//   // return api.getPlots()
//   //   .then(ui.getPlotsSuccess)
//   //   .then(console.log('see me second'))
//   //   .catch()
// }

// Load users plots into the Plots page.
const initializePlots = function () {
  api.getPlots()
    .then(ui.getPlotsSuccess)
    .then(promise => $('.plot').on('click', onGetPlot))
    .catch()
  ui.hidePlotAdder()
  // There must be a better way to do this.
}

const addEventHandlers = function () {
  $('#new-plot').on('click', showPlotForm)
  $('#confirm-new-plot').on('submit', onAddPlot)
  // on plot click, open modal which lists plot attr. v2, list plants.
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

const onGetPlot = function () {
  console.log('you clicked me')
  const plotId = $(event.target).closest('section').data('id')
  console.log(`you clicked plot ${plotId}`)
}

module.exports = {
  initializePlots,
  addEventHandlers
}
