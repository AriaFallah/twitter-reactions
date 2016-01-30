/* eslint no-unused-vars: 0 */
import { h, render } from 'preact'
const twemoji = require('twemoji')
export default () => twemoji.parse(render(
  <div class="ProfileTweet-action ProfileTweet-action--reply">
    <button class="ProfileTweet-actionButton" type="button">
      <div class="IconContainer js-tooltip" title="Emoji">
        <span class="Icon Emoji Emoji--forText">😁</span>
        <span class="u-hiddenVisually">Emoji</span>
      </div>
    </button>
  </div>
), { base: 'https://abs.twimg.com/emoji/v2/', size: '72x72' })
