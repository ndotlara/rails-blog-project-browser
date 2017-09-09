
'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.comments) {
    console.log(data.comment)
  } else {
    console.table(data.comments)
  }
}

const onUpdateSuccess = function () {
  console.log('Comment has been upated.')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError
}
