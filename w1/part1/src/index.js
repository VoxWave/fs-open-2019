import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <h1>Greets</h1>
      <p><Hello/> it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))