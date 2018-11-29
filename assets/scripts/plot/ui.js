const showPlotsTemplate = require('../templates/get-plots.handlebars')

const getPlotsSuccess = function (data) {
  console.log(data)
  const showPlotsHTML = showPlotsTemplate({plots: data.plots})
  $('.plot-holder').html(showPlotsHTML)
  return 'promise'
  // console.log('If you see me first, great.')
}

const showPlotAdder = function () {
  $('#newPlotModal').modal('show')
}

const hidePlotAdder = function () {
  $('#newPlotModal').modal('hide')
}

// Same as hidePlotAdder, but might work better later if functionality (like, now add plants, is added to it)
// const createPlotSuccess = function () {
//   $('#newPlotModal').modal('hide')
// }

module.exports = {
  getPlotsSuccess,
  showPlotAdder,
  // createPlotSuccess,
  hidePlotAdder
}
