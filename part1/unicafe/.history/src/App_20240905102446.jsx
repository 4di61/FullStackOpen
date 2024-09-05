import { useState } from 'react'

const feedback = ()=> (
  <h3>
    Give Feedback
  </h3>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3></h3>
      <feedback/>
    </div>
  )
}

export default App