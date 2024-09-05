import { useState } from 'react'

const Button = ({text,onClick})=> (
  
  <button onClick={onClick}>
    {text||"untitled"}
  </button>
)
const Feedback = ({incrementGood, incrementNeutral, incrementBad})=> (
  <div>
    <h3>
      Give Feedback
    </h3>
    <Button text = "good" onClick={incrementGood}/>
    <Button text = "neutral" onClick={incrementNeutral}/>
    <Button text = "bad" onClick={incrementBad}/>
  </div>
)

const Statistics = ({good, neutral, bad})=>(
  <div>
    <h3>
      statistics
    </h3>
    <p>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br/>
      all {}
    </p>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementStateValue = (value, fn) => (
    () => (
      fn(value+1)
    )
  )

  return (
    <div>
      <Feedback 
      incrementGood={incrementStateValue(good, setGood)}
      incrementBad={incrementStateValue(bad, setBad)}
      incrementNeutral={incrementStateValue(neutral, setNeutral)}

      />
      <Statistics
      good = {good}
      bad = {bad}
      neutral = {neutral}
      />
    </div>
  )
}

export default App