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

// const articleEvents = require('./articles/events')
//
// $(() => {
//   $('#articles-search').on('submit', articleEvents.onGetArticles)
//   $('#article-search').on('submit', articleEvents.onGetArticle)
//   $('#article-delete').on('submit', articleEvents.onDeleteArticle)
// })

const events = require('../app/events.js')

$(document).ready(function() {
  $('#addComment').on('submit', events.onCreateComment)






  $('#comments-search').on('submit', events.onGetComments)
  $('#comment-search').on('submit', events.onGetComments)
  $('#comment-delete').on('submit', events.onDeleteComment)

  $('nav, table, #change-password, #favorites-ui, #delete, #back, #save, #new, #backToSaved, #add-note').hide()
  $('#register').on('submit', events.registerUser)
  $('#login').on('submit', events.loginUser)
  $('#favorites-ui').on('submit', events.addNote)
  $('#change-password').on('submit', events.changeUserPassword)
  $('#new').on('click', events.getNewPrompt)
  $('#save').on('click', events.saveNewPrompt)
  $('#back').on('click', events.backToPrompt)
  $('#delete').on('click', events.deleteFavorite)
  $('#backToSaved').on('click', events.backToSaved)
  //click events for links
  $('#saved-prompts').on('click', events.displaySavedPrompts)
  $('#log-out').on('click', events.logoutUser)
  $('#pass-change').on('click', function() {
      $('#change-password').show()
  })
  $(document).on('click', '#favorites-table a', function(event) {
    event.preventDefault()
    $('#favorites-table').remove()
    $('#back').hide()
    let fav_id = $(this).attr('id')
    //console.log(this)
    events.getPrompt(fav_id)

  })
})
