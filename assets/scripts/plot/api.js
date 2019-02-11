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
  // console.log(data)
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

const deletePlot = function (plotId) {
  // console.log('I should run before init plot')
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + `/plots/${plotId}`,
    method: 'DELETE',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const addPlant = function (plotId, plantId) {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + `/plots/${plotId}/add-plant`,
    method: 'PATCH',
    headers: {Authorization: `Token token=${userToken}`},
    data: { plant: { plantId } }
  })
}

module.exports = {
  getPlots,
  addPlot,
  getPlot,
  updatePlot,
  deletePlot,
  addPlant
}
