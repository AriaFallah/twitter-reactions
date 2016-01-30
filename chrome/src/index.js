// Styles
require('./scss/app.scss')

import emojiAction from './components/emoji-action'
import emojiDashboard from './components/emoji-keyboard'

function addActions() {
  const actionList = $('.ProfileTweet-actionList')
  actionList.each(function() {
    $(this).append(emojiAction)
  })
}

addActions()
$(document.body).prepend(emojiDashboard)
