const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Load users plots into the Plots page.
const initializePlots = function (data) {
  ui.clearUserMessage()
  api.getPlots()
    .then(ui.getPlotsSuccess)
    .then(() => $('.plot').on('click', onGetPlot))
    .catch()
  // There must be a better way to do this.
  ui.hidePlotAdder()
  return ''
}

const addPlotEventHandlers = function () {
  $('#name-edit').on('click', onEditPlotAttr)
  $('#size-edit').on('click', onEditPlotAttr)
  $('#brightness-edit').on('click', onEditPlotAttr)
  $('#climate-edit').on('click', onEditPlotAttr)
  $('#notes-edit').on('click', onEditPlotAttr)
  $('#name').on('submit', onUpdatePlotAttr)
  $('#size').on('submit', onUpdatePlotAttr)
  $('#brightness').on('submit', onUpdatePlotAttr)
  $('#climate').on('submit', onUpdatePlotAttr)
  $('#notes').on('submit', onUpdatePlotAttr)
  $('#delete-plot').on('click', onDeletePlot)
  // button to add corn to plot
  $('#addPlant').on('click', onAddPlant)
}

const addEventHandlers = function () {
  $('#new-plot-launcher').on('click', showPlotForm)
  $('#confirm-new-plot').on('submit', onAddPlot)
  // on plot click, open modal which lists plot attr. v2, list plants.
}

const showPlotForm = function () {
  ui.clearUserMessage()
  ui.showPlotAdder()
}

const onAddPlot = function () {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  // console.log(data)
  api.addPlot(data)
    .then(initializePlots)
    .catch()
}

const onGetPlot = function () {
  ui.clearUserMessage()
  const plotId = $(event.target).closest('section').data('id')
  // console.log(`you clicked plot ${plotId}`)
  api.getPlot(plotId)
    .then(ui.getPlotSuccess)
    .then(addPlotEventHandlers)
    .catch()
}

const onEditPlotAttr = function () {
  event.preventDefault()
  ui.clearUserMessage()
  hideForms()
  const editAttr = event.target.id
  // console.log(editAttr)
  $(`.edit-plot-${editAttr}`).toggleClass('hidden')
}

// function to add corn to plot
const onAddPlant = function () {
  event.preventDefault()
  ui.clearUserMessage()
  hideForms()
  const plotId = $(event.target).closest('section').data('id')
  const plantId = 6
  // button that hits the plot endpoint
  api.addPlant(plotId, plantId)
    .then(initializePlots)
    .then(ui.updatePlotSuccess)
    .catch()
}

const onUpdatePlotAttr = function () {
  event.preventDefault()
  // console.log('you clicked submit')
  const data = getFormFields(event.target)
  const plotId = $(event.target).closest('section').data('id')
  // const updateAttr = event.target.id
  api.updatePlot(data, plotId)
    .then(initializePlots)
    .then(ui.updatePlotSuccess)
    .catch()
}

const onDeletePlot = function () {
  event.preventDefault()
  const plotId = $(event.target).closest('section').data('id')
  const plotName = $(event.target).closest('button').data('name')
  api.deletePlot(plotId)
    .then(initializePlots)
    .then(() => ui.deletePlotSuccess(plotName))
    .catch()
}

const hideForms = function (editAttr) {
  // console.log('i toggled')
  if (!$(`.edit-plot-name-edit`).hasClass('hidden')) {
    $(`.edit-plot-name-edit`).toggleClass('hidden')
  }
  if (!$(`.edit-plot-size-edit`).hasClass('hidden')) {
    $(`.edit-plot-size-edit`).toggleClass('hidden')
  }
  if (!$(`.edit-plot-brightness-edit`).hasClass('hidden')) {
    $(`.edit-plot-brightness-edit`).toggleClass('hidden')
  }
  if (!$(`.edit-plot-climate-edit`).hasClass('hidden')) {
    $(`.edit-plot-climate-edit`).toggleClass('hidden')
  }
  if (!$(`.edit-plot-notes-edit`).hasClass('hidden')) {
    $(`.edit-plot-notes-edit`).toggleClass('hidden')
  }
}

module.exports = {
  initializePlots,
  addEventHandlers
}
