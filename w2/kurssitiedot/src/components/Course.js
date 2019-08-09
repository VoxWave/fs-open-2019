import React from 'react'

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

const Course = ({course}) => {
  return <>
    <Header>
  </>
}

export default Course