'use strict'

const commentsApi = require('./api.js')
const commentsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /comments
// button is clicked
const onGetComments = function (event) {
  event.preventDefault()

  commentsApi.index()
    .then(commentsUi.onSuccess)
    .catch(commentsUi.onError)
}

const onGetComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const Comment = data.comment

  if (comment.id.length !== 0) {
    commentsApi.show(comment.id)
      .then(commentsUi.onSuccess)
      .catch(commentsUi.onError)
  } else {
    console.log('Please provide a comment id!')
  }
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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

module.exports = {
  onGetComments,
  onGetComment,
  onUpdateComment,
  onDeleteComment
}
