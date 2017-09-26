'use strict'

const app = require('../app.js')

const userSignup = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const userSignin = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      "passwords": {
        "old": data.passwords.old,
        "new": data.passwords.new
      }
    }
  })
}

const userSignout = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const commentIndex = function () {
  return $.ajax({
    url: app.host + '/comments/',
    method: 'GET'
  })
}

const showComment = function (id) {
  return $.ajax({
    url: app.host + '/comments/' + id,
    method: 'GET'
  })
}

const createComment = function (data) {
  return $.ajax({
    url: app.host + '/comments/' + data.comment,
    method: 'POST',
    data
  })
}

const updateComment = function (data) {
  return $.ajax({
    url: app.host + '/comments/' + data.comment.id,
    method: 'PATCH',
    data
  })
}

const deleteComment = function (id) {
  return $.ajax({
    url: app.host + '/comments/' + id,
    method: 'DELETE'
  })
}

const articleIndex = function () {
  return $.ajax({
    url: app.host + '/articles/',
    method: 'GET'
  })
}

const showArticle = function (id) {
  return $.ajax({
    url: app.host + '/articles/' + id,
    method: 'GET'
  })
}

const updateArticle = function (data) {
  return $.ajax({
    url: app.host + '/articles/' + data.article.id,
    method: 'PATCH',
    data
  })
}

const deleteArticle = function (id) {
  return $.ajax({
    url: app.host + '/articles/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  articleIndex,
  showArticle,
  updateArticle,
  deleteArticle,
  commentIndex,
  showComment,
  createComment,
  updateComment,
  deleteComment,
  userSignup,
  userSignin,
  userSignout,
  changePassword
}
