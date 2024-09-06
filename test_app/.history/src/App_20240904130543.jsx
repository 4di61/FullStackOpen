import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)


  function handleClick  () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

export default App
