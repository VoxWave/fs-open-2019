import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>{props.course}</h1>

const Content = props =>
  props.parts.map( e => 
    <Part name = {e.name} amount = {e.exercises}/>
  )

const Part = props => <p>{props.name} {props.amount}</p>

const Total = props => 
  <p>
    Number of exercises {
    props.parts
      .map(e => e.exercises)
      .reduce((a,c) => a+c, 0)
    }
  </p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))