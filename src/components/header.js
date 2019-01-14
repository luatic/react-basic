import React, {Component} from 'react'
import '../css/style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div
          className="logo"
          onClick={() => {
            console.log('klik')
          }}>
          Logo
        </div>
        <input type="text" />
      </header>
    )
  }
}

export default Header
