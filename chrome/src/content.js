// Styles
require('./scss/app.scss')

import React from 'react'
import { render } from 'react-dom'
import EmojiAction from './components/emoji-action'

function inject() {
  const tweets = $('.tweet.original-tweet .stream-item-footer')
  tweets.each(function() {
    const tweet = $(this)
    const div = $('<div></div>')[0]
    const id = tweet.attr('data-tweet-id')
    render(<EmojiAction id={id}/>, div)
    tweet.append(div)
  })
}

inject()
