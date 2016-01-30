import React, { Component } from 'react'
import EventImage from './event-image'
import { emojis, result } from '../utils/emojis'

export default class EmojiAction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEmojis: false,
      reactions: {},
    }
    this.toggleEmojis = this.toggleEmojis.bind(this)
    this.addReaction = this.addReaction.bind(this)
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

  addReaction(reactionId) {
    const { reactions } = this.state
    if (!reactions[reactionId]) reactions[reactionId] = 1
    else reactions[reactionId]++
    this.setState({ reactions })
  }

  render() {
    return (
      <main ref="main">
        <section className="reactions">
          {Object.keys(this.state.reactions).map((key) =>
            <label key={key}>
              <img
                className="emoji reaction"
                src={`https://abs.twimg.com/emoji/v2/72x72/${emojis[key]}.png`}
              />
              {this.state.reactions[key]}
            </label>
          )}
        </section>
        <section className="emoji-action">
          <img
            ref="emojiToggle"
            className="emoji"
            src="https://abs.twimg.com/emoji/v2/72x72/1f601.png"
          />
          <div className="emoji-action-content">
            {this.state.showEmojis
              ? <section className="emoji-keyboard">
                <h3 className="header">Emojis</h3>
                <hr />
                <figure className="emojis">
                  {result.map((index) =>
                    <EventImage
                      key={index}
                      className="emoji"
                      src={`https://abs.twimg.com/emoji/v2/72x72/${emojis[index]}.png`}
                      onClick={() => this.addReaction(index)}
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
