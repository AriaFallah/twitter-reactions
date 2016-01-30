const emojiActionHTML   = require('./html/emoji-action.html')
const dislikeActionHTML = require('./html/dislike-action.html')

function addActions() {
  const actionList = $('.ProfileTweet-actionList')
  actionList.each(function() {
    $(this).append(emojiActionHTML)
    $(this).append(dislikeActionHTML)
  })
}

addActions()
