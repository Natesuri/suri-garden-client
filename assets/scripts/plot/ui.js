const showPlotsTemplate = require('../templates/get-plots.handlebars')

const getPlotsSuccess = function (data) {
  console.log(data)
  const showPlotsHTML = showPlotsTemplate({plots: data.plots})
  $('.plot-holder').html(showPlotsHTML)
}

module.exports = {
  getPlotsSuccess
}
