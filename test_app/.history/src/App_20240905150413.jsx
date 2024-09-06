import { useState } from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(() => (
          
        )}
      </ul>
    </div>
  )
}


export default App
