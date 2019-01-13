import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return React.createElement('h1', { className: 'title' }, 'witaj dupa')
}

ReactDOM.render(<App />, document.getElementById('root'))
