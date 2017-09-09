
'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.articles) {
    console.log(data.article)
  } else {
    console.table(data.articles)
  }
}

const onUpdateSuccess = function () {
  console.log('Article has been upated.')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError
}
