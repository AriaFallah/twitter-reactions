// Styles
require('./scss/app.scss')

const EmojiAction = require('html/emoji-action')
const EmojiBar    = require('html/emoji-bar')

function inject() {
  const tweets = $('.tweet.original-tweet')
  tweets.each(function() {
    const id = $(this).attr('data-tweet-id')

    const actionLists = $('.ProfileTweet-actionList')
    actionLists.each(function() {

    })
    const tweetFooters = $('.stream-item-footer')
    tweetFooters.each(function() {

    })
  })
}

inject()
