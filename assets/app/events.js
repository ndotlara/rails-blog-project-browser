'use strict'

const commentsApi = require('./api.js')
const articlesApi = require('./api.js')
const userApi = require('./api.js')
const commentsUi = require('./ui.js')
const articlesUi = require('./ui.js')
const userUi = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /comments
// button is clicked

const onRegisterUser = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  $('.error').text('')
  $('.message').text('')
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('.error').text('Passwords do not match.')
  } else {
    userApi.userSignup(data)
      .then(userUi.onSignupSuccess)
      .catch(userUi.onSignupFailure)
  }
}

const onUserLogin = function (event) {
  event.preventDefault()
  $('.error').text('')
  $('.message').text('')
  const data = getFormFields(this)
  userApi.userSignin(data)
    .then(userUi.onLoginSuccess)
    .catch(userUi.onLoginFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('.error').text('')
  $('.message').text('')
  const data = getFormFields(this)
  userApi.changePassword(data)
    .then(userUi.onChangeSuccess)
    .catch(userUi.onChangeFailure)
}

const onUserSignout = function (event) {
  event.preventDefault()
  $('.error').text('')
  $('.message').text('')
  userApi.userSignout()
    .then(userUi.onLogoutSuccess)
    .catch(userUi.onLogoutFailure)
}

const onGetComments = function (event) {
  event.preventDefault()

  commentsApi.index()
    .then(commentsUi.onSuccess)
    .catch(commentsUi.onError)
}

const onGetComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const comment = data.comment

  if (comment.id.length !== 0) {
    commentsApi.show(comment.id)
      .then(commentsUi.onSuccess)
      .catch(commentsUi.onError)
  } else {
    console.log('Please provide a comment id!')
  }
}

const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  debugger
  const comment = data.comment
  commentsApi.update(data)
    .then(commentsUi.onUpdateSuccess)
    .catch(commentsUi.onError)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  const comment = data.comment

  if (comment.id.length !== 0) {
    commentsApi.update(data)
      .then(commentsUi.onUpdateSuccess)
      .catch(commentsUi.onError)
  } else {
    console.log('Please provide a comment id!')
  }
}

const onDeleteComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const comment = data.comment

  if (comment.id.length !== 0) {
    commentsApi.destroy(comment.id)
      .then(commentsUi.onSuccess)
      .catch(commentsUi.onError)
  } else {
    console.log('Please provide a comment id!')
  }
}
const onGetArticles = function (event) {
  event.preventDefault()

  articlesApi.index()
    .then(articlesUi.onSuccess)
    .catch(articlesUi.onError)
}

const onGetArticle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const article = data.article

  if (article.id.length !== 0) {
    articlesApi.show(article.id)
      .then(articlesUi.onSuccess)
      .catch(articlesUi.onError)
  } else {
    console.log('Please provide a article id!')
  }
}

const onUpdateArticle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const article = data.article

  if (article.id.length !== 0) {
    articlesApi.update(data)
      .then(articlesUi.onUpdateSuccess)
      .catch(articlesUi.onError)
  } else {
    console.log('Please provide a article id!')
  }
}

const onDeleteArticle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const article = data.article

  if (article.id.length !== 0) {
    articlesApi.destroy(article.id)
      .then(articlesUi.onSuccess)
      .catch(articlesUi.onError)
  } else {
    console.log('Please provide a article id!')
  }
}

module.exports = {
  onGetComments,
  onGetComment,
  onCreateComment,
  onUpdateComment,
  onDeleteComment,
  onRegisterUser,
  onUserLogin,
  onChangePassword,
  onUserSignout,
  onGetArticles,
  onGetArticle,
  onUpdateArticle,
  onDeleteArticle
}
