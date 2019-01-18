import React, {Component} from 'react'
import Styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
	margin: 0px 0px 0px 0px;
}
`
const Logo = Styled.h1` color: #FFA500; font-size: 40px;
	font-family: 'Anton';
`
const Wrapper = Styled.header`
  background: #03a9f4;
	text-align: center;
`
const Input = Styled.input`
  font-size: 20px;
	margin: 20px 0;
`
class Header extends Component {
<<<<<<< HEAD
  inputChangeHandler(event) {
    console.log(event.target.value)
=======
  inputChangeHandler(e) {
    console.log(e.target.value)
>>>>>>> 22140e46e1f8d3268899d332acb51b3e8e7ab07f
  }

  render() {
    return (
<<<<<<< HEAD
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
=======
      <Wrapper>
        <GlobalStyle />
        <Logo className="logo"> Logo</Logo>
        <Input type="text" onChange={this.inputChangeHandler} />
      </Wrapper>
>>>>>>> 22140e46e1f8d3268899d332acb51b3e8e7ab07f
    )
  }
}
export default Header
