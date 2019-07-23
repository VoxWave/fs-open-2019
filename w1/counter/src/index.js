import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        reset
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
