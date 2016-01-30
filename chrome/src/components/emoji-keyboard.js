/* eslint no-unused-vars: 0 */
import { h, render } from 'preact'
import emojiUtil from '../utils/emojis'
const twemoji = require('twemoji')
export default () => twemoji.parse(render(
  <div class="emoji-keyboard">
    {emojiUtil.result.map((index) =>
      <div className="emoji" key={index}>{emojiUtil.emojis[index]}</div>
    )}
  </div>
), { base: 'https://abs.twimg.com/emoji/v2/', size: '72x72' })
