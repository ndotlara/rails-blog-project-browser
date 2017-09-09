'use strict'

const app = require('../app.js')

const index = function () {
  return $.ajax({
    url: app.host + '/articles/',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/articles/' + id,
    method: 'GET'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/articles/' + data.article.id,
    method: 'PATCH',
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/articles/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  index,
  show,
  update,
  destroy
}
