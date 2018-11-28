const config = require('../config.js')

const getPlots = function () {
  return $.ajax({
    url: config.apiUrl + '/plots'
  })
}

module.exports = {
  getPlots
}
