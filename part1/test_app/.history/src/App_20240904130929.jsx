import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <br/>
      <button onClick={()=> setCounter(counter-1)}>minus</button>
      <br
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}

export default App
