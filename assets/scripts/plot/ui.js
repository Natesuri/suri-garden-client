const indexPlotsTemplate = require('../templates/get-plots.handlebars')
const showPlotTemplate = require('../templates/get-one-plot.handlebars')

const getPlotsSuccess = function (data) {
// need to add username to Username Temp Spot

  console.log(data)
  // later, will sort data by index

  const indexPlotsHTML = indexPlotsTemplate({plots: data.plots})
  $('.plot-holder').html(indexPlotsHTML)
  return 'promise'
  // console.log('If you see me first, great.')
}

const showPlotAdder = function () {
  $('#newPlotModal').modal('show')
}

const hidePlotAdder = function () {
  $('#newPlotModal').modal('hide')
}

const getPlotSuccess = function (apiData) {
  console.log(apiData)
  const showPlotHTML = showPlotTemplate({plot: apiData.plot})
  $('#one-plot-modal-content').html(showPlotHTML)
  $('#onePlotModal').modal('show')
  return 'promise'
}

const updatePlotSuccess = function (data) {
  $('#onePlotModal').modal('hide')
  $('#user-message').text('Plot updated successfully')
}

const clearUserMessage = function () {
  $('#user-message').text('')
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
  clearUserMessage
}
