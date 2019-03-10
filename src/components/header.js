import React, {Component} from 'react'

export default class Header extends Component {
  state = {}

  inputChangeHandler = e => {
    this.setState({
      keywords: e.target.value,
    })
  }
  render() {
    return <div>cc</div>
  }
}
