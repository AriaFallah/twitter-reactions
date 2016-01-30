/* eslint no-unused-vars: 0 */
import { h, render } from 'preact'
import emojiUtil from '../utils/emojis'
export default () => render(
  <div class="emoji-keyboard">
    {emojiUtil.result.map((index) =>
      <img className="emoji" key={index} src={`https://abs.twimg.com/emoji/v2/72x72/${emojiUtil.emojis[index]}.png`} />
    )}
  </div>
)
