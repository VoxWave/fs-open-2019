import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>You were probably born in the year {bornYear}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <>
      <h1>Greets</h1>
      <Hello/><p> it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name = "Voggo" age = {10 + 15}/>
      <Hello name = "Veggo" age = {a + b}/>
      <Hello name = "Viggo" age = {25}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))