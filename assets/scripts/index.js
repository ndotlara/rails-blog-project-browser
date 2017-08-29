'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const articleEvents = require('./articles/events')

$(() => {
  $('#articles-search').on('submit', articleEvents.onGetArticles)
  $('#article-search').on('submit', articleEvents.onGetArticle)
  $('#article-delete').on('submit', articleEvents.onDeleteArticle)
})
