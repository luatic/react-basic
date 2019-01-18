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
  inputChangeHandler(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Logo className="logo"> Logo</Logo>
        <Input type="text" onChange={this.inputChangeHandler} />
      </Wrapper>
    )
  }
}
export default Header
