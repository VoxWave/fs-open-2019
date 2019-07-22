import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>You were probably born in the year {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <>
      <div>{counter}</div>
      <h1>Greets</h1>
      <Hello name="wee" age="64"/><p> it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name = "Voggo" age = {10 + 15}/>
      <Hello name = "Veggo" age = {a + b}/>
      <Hello name = "Viggo" age = {25}/>
    </>
  )
}

let counter = 1

ReactDOM.render(<App counter = {counter} />, document.getElementById('root'))