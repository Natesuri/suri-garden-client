const indexPlotsTemplate = require('../templates/get-plots.handlebars')
const showPlotTemplate = require('../templates/get-one-plot.handlebars')
// const userStore = require('../userStore.js')

const getPlotsSuccess = function (data) {
// need to add username to Username Temp Spot

  // later, will sort data by index

  // console.log('running handlebars template')
  // console.log('after a delete or update this is the data that runs', data)
  const indexPlotsHTML = indexPlotsTemplate({plots: data.plots})
  $('.plot-holder').html(indexPlotsHTML)
  // console.log('gets to the return')
  return ''
  // console.log('If you see me first, great.')
}

const showPlotAdder = function () {
  $('#newPlotModal').modal('show')
}

const hidePlotAdder = function () {
  $('#newPlotModal').modal('hide')
}

const getPlotSuccess = function (apiData) {
  const showPlotHTML = showPlotTemplate({plot: apiData.plot})
  $('#one-plot-modal-content').html(showPlotHTML)
  $('#onePlotModal').modal('show')
  return ''
}

const updatePlotSuccess = function (data) {
  $('#onePlotModal').modal('hide')
  $('#user-message').text('Plot updated successfully')
}

const clearUserMessage = function () {
  $('#user-message').text('')
}

const deletePlotSuccess = function (plotName) {
  console.log(plotName)
  $('#onePlotModal').modal('hide')
  $('#user-message').text(`${plotName} Deleted successfully`)
}

// Same as hidePlotAdder, but might work better later if functionality (like, now add plants, is added to it)
// const createPlotSuccess = function () {
//   $('#newPlotModal').modal('hide')
// }

module.exports = {
  getPlotsSuccess,
  showPlotAdder,
  // createPlotSuccess,
  hidePlotAdder,
  getPlotSuccess,
  updatePlotSuccess,
  clearUserMessage,
  deletePlotSuccess
}
