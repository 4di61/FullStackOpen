import { useState } from 'react'

const Button = ({text,onClick})=> (
  
  <button onClick={onClick}>
    {text||"untitled"}
  </button>
)
const Feedback = (props)=> (
  <div>
    <h3>
      Give Feedback
    </h3>
    <Button text={"good"}/>
    <Button />
    <Button />
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback/>
    </div>
  )
}

export default App