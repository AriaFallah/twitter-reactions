import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EventImage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const component = ReactDOM.findDOMNode(this)
    $(component).click(this.props.onClick)
  }

  render() {
    const { src, className } = this.props
    return <img src={src} className={className} />
  }
}
