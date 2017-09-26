
'use strict'

const app = require('../app.js')
const events = require('./events.js')

const onCommentSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.comments) {
    console.log(data.comment)
  } else {
    console.table(data.comments)
  }
}

const onUpdateCommentSuccess = function () {
  console.log('Comment has been upated.')
}

const onCommentError = function (response) {
  console.error(response)
}

const onArticleSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.articles) {
    console.log(data.article)
  } else {
    console.table(data.articles)
  }
}

const onUpdateArticleSuccess = function () {
  console.log('Article has been updated.')
}

const onArticleError = function (response) {
  console.error(response)
}

// const onUserSuccess = function (data) {
//   console.log(data)
//   if (!data) {
//     console.warn('Either you deleted something, or something went wrong.')
//   } else if (data.user) {
//     console.log(data.user)
//   } else {
//     console.table(data.user)
//   }
// }
//
// const onUpdateArticleSuccess = function () {
//   console.log('Article has been upated.')
// }
//
// const onArticleError = function (response) {
//   console.error(response)
// }

module.exports = {
  onCommentSuccess,
  onUpdateCommentSuccess,
  onCommentError,
  onArticleSuccess,
  onUpdateArticleSuccess,
  onArticleError
  // onUserSignUpSuccess,
  // onUserSignUpError,
  // onUserSignInSuccess,
  // onUserSignInError,
  // onChangePasswordSuccess,
  // onChangePasswordError,
  // onUserSignOutSuccess,
  // onUserSignOutError,
}
