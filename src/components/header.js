import React, {Component} from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
	margin: 0px 0px 0px 0px;
}
`
const Logo = styled.h1`
  color: #ffa500;
  font-size: 40px;
  font-family: 'Anton';
`
const Wrapper = styled.header`
  background: #03a9f4;
  text-align: center;
  padding-top: 10px;
`
const Input = styled.input`
  font-size: 25px;
  margin: 25px 0px 75px 0px;
`
class Header extends Component {
  state = {
    keywords: 'witaj',
  }

  inputChangeHandler = e => {
    this.setState({
      keywords: e.target.value,
    })
  }
  render() {
    console.log(this.state.keywords)
    return (
      <Wrapper>
        <GlobalStyle />
        <Logo> Logo</Logo>
        <Input type="text" onChange={this.inputChangeHandler} />
      </Wrapper>
    )
  }
}

export default Header
