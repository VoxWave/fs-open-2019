import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Vote = ({good, neutral, bad}) => 
  <div>
    <h1>Give Feedback</h1>
    <div>
      <Button handler={good} text={'good'} />
      <Button handler={neutral} text={'neutral'} />
      <Button handler={bad} text={'bad'} />
    </div>
  </div>

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const Stats = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all
  if (all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text={'good'} value={good}/>
            <Statistic text={'neutral'} value={neutral}/>
            <Statistic text={'bad'} value={bad}/>
            <Statistic text={'all'} value={all}/>
            <Statistic text={'average'} value={average}/>
            <Statistic text={'positive'} value={positive}/>
          </tbody>
        </table>
      </div>
    )
  } else {
    return <div></div>
  }
}

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValue = (value, setter) => () => {
    setter(value)
  }

  return (
    <div>
      <Vote 
        good={setValue(good+1, setGood)} 
        neutral={setValue(neutral+1, setNeutral)}
        bad={setValue(bad+1, setBad)}
      />
      <Stats 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)