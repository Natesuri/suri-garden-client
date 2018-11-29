const config = require('../config.js')
const userStore = require('../userStore.js')

const getPlots = function () {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/plots',
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const addPlot = function (data) {
  console.log(data)
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/plots',
    method: 'POST',
    headers: {Authorization: `Token token=${userToken}`},
    data: data
  })
}

const getPlot = function (plotId) {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + `/plots/${plotId}`,
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const updatePlot = function (data, plotId) {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + `/plots/${plotId}`,
    method: 'PATCH',
    headers: {Authorization: `Token token=${userToken}`},
    data: data
  })
}

module.exports = {
  getPlots,
  addPlot,
  getPlot,
  updatePlot
}
