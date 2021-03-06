const indexPlotsTemplate = require('../templates/get-plots.handlebars')
const showPlotTemplate = require('../templates/get-one-plot-view.handlebars')
// const userStore = require('../userStore.js')

const getPlotsSuccess = function (data) {
  // later, will sort data by index

  const indexPlotsHTML = indexPlotsTemplate({plotPlants: data})
  $('.plot-holder').html(indexPlotsHTML)
  if ($('#individualPlotView').css('display') !== 'none') {
    $('#individualPlotView').toggle()
    $('#plots').toggle()
  }
  return ''
}

const showPlotAdder = function () {
  $('#newPlotModal').modal('show')
}

const hidePlotAdder = function () {
  $('#newPlotModal').modal('hide')
}

const getPlotSuccess = function (apiData) {
  const showPlotHTML = showPlotTemplate({plot: apiData.plot, plotPlants: apiData.plot_plants})
  $('#individualPlotView').html(showPlotHTML)
  if ($('#plots').css('display') !== 'none') {
    $('#individualPlotView').toggle()
    $('#plots').toggle()
  }
  return ''
}

const updatePlotSuccess = function (data) {
  $('#user-message').text('Plot updated successfully')
}

const clearUserMessage = function () {
  $('#user-message').text('')
}

const deletePlotSuccess = function (plotName) {
  // console.log(plotName)
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
