import React, {Component} from 'react'
import '../css/style.css'

class Header extends Component {
  input() {
    console.log('cos tam')
  }
  render() {
    return (
      <header>
        <div className="logo" onClick={this.input}>
          Logo
        </div>
        <input type="text" />
      </header>
    )
  }
}

export default Header
