import { h, render, Component } from 'preact'
import EmojiKeyboard from './emoji-keyboard'
import emojiUtil from '../utils/emojis'

export default class EmojiAction extends Component {
  componentDidMount() {
    this.state.showEmojiKeyboard = false
  }

  render(props, state) {
    return (
      <div class="ProfileTweet-action ProfileTweet-action--reply">
        <button class="ProfileTweet-actionButton" type="button">
          <div class="IconContainer js-tooltip" title="Emoji">
            <img class="Icon Emoji Emoji--forText" src={`https://abs.twimg.com/emoji/v2/72x72/${emojiUtil.emojis[0]}.png`} />
            <span class="u-hiddenVisually">Emoji</span>
          </div>
        </button>
        <EmojiKeyboard />
      </div>
    )
  }
}
