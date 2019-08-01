import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const DailyAnecdote = () => {

}

const MostVoted = () => {
  
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(new Array(props.anecdotes.length).fill(0))
  const setNextAnecdote = () => {
    const index = randomIntFromRange(0, props.anecdotes.length-1);
    setSelected(index)
  }

  const vote = () => {
    const updatedScores = [...scores]
    updatedScores[selected] += 1
    setScores(updatedScores)
  }

  return (
    <>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        Has {scores[selected]} votes.
      </div>
      <div>
        <Button handler={setNextAnecdote} text={'next anecdote'}/>
        <Button handler={vote} text={'vote'}/>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)