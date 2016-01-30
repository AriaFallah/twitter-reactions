// Styles
require('./scss/app.scss')

// Preact and Components
import { h, render } from 'preact'
import EmojiAction from './components/emoji-action'

function addActions() {
  const actionList = $('.ProfileTweet-actionList')
  actionList.each(function() {
    render(<EmojiAction />, this)
  })
}

addActions()
