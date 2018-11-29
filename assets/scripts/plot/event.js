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

const addPlotEventHandlers = function () {
  $('#name').on('click', onUpdatePlot)
  $('#size').on('click', onUpdatePlot)
  $('#brightness').on('click', onUpdatePlot)
  $('#climate').on('click', onUpdatePlot)
  $('#notes').on('click', onUpdatePlot)
  // editPlotEventHandlers()
}

// const editPlotEventHandlers = function () {
//   $('#size').on('click', onUpdatePlot)
//   $('#brightness').on('click', onUpdatePlot)
//   $('#climate').on('click', onUpdatePlot)
//   $('#notes').on('click', onUpdatePlot)
// }

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
  const plotId = $(event.target).closest('section').data('id')
  console.log(`you clicked plot ${plotId}`)
  api.getPlot(plotId)
    .then(ui.getPlotSuccess)
    .then(promise => addPlotEventHandlers())
    .catch()
}

const onUpdatePlot = function () {
  hideForms()
  const plotId = $(event.target).closest('section').data('id')
  const editAttr = event.target.id
  event.preventDefault()
  console.log(event)
  console.log(editAttr)
  console.log(`.edit-plot-${editAttr}`)
  $(`.edit-plot-${editAttr}`).toggleClass('hidden')
}

const hideForms = function (editAttr) {
  console.log('i toggled')
  if (!$(`.edit-plot-${editAttr}`).hasClass('hidden')) {
    $(`.edit-plot-${editAttr}`).toggleClass('hidden')
  }
}

module.exports = {
  initializePlots,
  addEventHandlers
}
