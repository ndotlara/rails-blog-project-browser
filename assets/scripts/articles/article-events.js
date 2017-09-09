'use strict'

const articlesApi = require('./api.js')
const articlesUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /articles
// button is clicked
const onGetArticles = function (event) {
  event.preventDefault()

  articlesApi.index()
    .then(articlesUi.onSuccess)
    .catch(articlesUi.onError)
}

const onGetArticle = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const Article = data.article

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
  onGetArticles,
  onGetArticle,
  onUpdateArticle,
  onDeleteArticle
}
