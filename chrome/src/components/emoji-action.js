import React, { Component } from 'react'
import { emojis, result } from '../utils/emojis'

export default class EmojiAction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEmojis: false,
    }
    this.toggleEmojis = this.toggleEmojis.bind(this)
  }

  callAPI() {

  }

  componentDidMount() {
    const { main, emojiToggle } = this.refs
    $(main).click((e) => e.stopPropagation())
    $(emojiToggle).click(this.toggleEmojis)
  }

  toggleEmojis() {
    const showEmojis = !this.state.showEmojis
    this.setState({ showEmojis })
  }

  render() {
    return (
      <main ref="main">
        <section className="emoji-action">
          <img
            ref="emojiToggle"
            className="Icon emoji"
            src="https://abs.twimg.com/emoji/v2/72x72/1f601.png"
          />
          <div className="emoji-action-content">
            {this.state.showEmojis
              ? <section className="emoji-keyboard">
                <h3 className="header">Emojis</h3>
                <hr />
                <figure className="emojis">
                  {result.map((index) =>
                    <img
                      className="emoji"
                      onClick={this.callAPI}
                      key={index}
                      src={`https://abs.twimg.com/emoji/v2/72x72/${emojis[index]}.png`}
                    />
                  )}
                </figure>
              </section>
              : undefined
            }
          </div>
        </section>
      </main>
    )
  }
}
