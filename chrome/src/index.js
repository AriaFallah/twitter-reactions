// Styles
require('./scss/app.scss')

//
// const emojiActionHTML =
//   twemoji.parse(require('./html/emoji-action.html'))
//     .replace('twemoji.maxcdn.com/36x36', 'abs.twimg.com/emoji/v2/72x72')
//
// const dislikeActionHTML = require('./html/dislike-action.html')
import emojiAction from './components/emoji-action'

function addActions() {
  const actionList = $('.ProfileTweet-actionList')
  actionList.each(function() {
    $(this).append(emojiAction)
  })
}

addActions()
console.log('hello')
