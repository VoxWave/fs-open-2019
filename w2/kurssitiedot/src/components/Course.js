import React from 'react'

const Header = props => <h2>{props.title}</h2>

const Content = props =>
  props.parts.map( e => 
    <Part key={e.id} name = {e.name} amount = {e.exercises}/>
  )

const Part = props => <p>{props.name} {props.amount}</p>

const Total = props => 
  <p>
    <b>Total number of exercises: </b> {
    props.parts
      .map(e => e.exercises)
      .reduce((a,c) => a+c, 0)
    }
  </p>

const Course = ({course}) => {
  return <>
    <Header title = {course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>
}

export default Course