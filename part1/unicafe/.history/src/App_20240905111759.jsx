import { useState } from 'react'

const Button = ({text,onClick})=> (
  
  <button onClick={onClick}>
    {text||"untitled"}
  </button>
)

const StatisticLine = ({text, value}) => (
  <p>
    text {value}
  </p>
)

const Feedback = ({incrementGood, incrementNeutral, incrementBad})=> (
  <div>
    <Button text = "good" onClick={incrementGood}/>
    <Button text = "neutral" onClick={incrementNeutral}/>
    <Button text = "bad" onClick={incrementBad}/>
  </div>
)

const Statistics = ({good, neutral, bad})=>{
  const all = good + bad + neutral
  const average = (good - bad)/all
  const positive = good/(all)*100
  if(all === 0){
    return <div>
      <h3>
        statistics
      </h3>
      <p>No feedback given</p>
    </div>
  }
  return <div>
    <StatisticLine text="good" value = {good}/>
    <StatisticLine text="neutral" value = {neutral}/>
    <StatisticLine text="bad" value = {bad}/>
    <StatisticLine text="all" value = {all}/>
    <StatisticLine text="average" value = {good}/>
    <StatisticLine text="positive" value = {good}/>
  </div>
}

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
      <h3>Give Feedback</h3>
      <Feedback 
      incrementGood={incrementStateValue(good, setGood)}
      incrementBad={incrementStateValue(bad, setBad)}
      incrementNeutral={incrementStateValue(neutral, setNeutral)}
      />
      <h3>Statistics</h3>
      <Statistics
      good = {good}
      bad = {bad}
      neutral = {neutral}
      />
    </div>
  )
}

export default App