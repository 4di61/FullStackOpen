import { useState } from 'react'

const Note = ({note}) => (
  <li>{note.content}</li>
)
const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note note = {}/>
        ))}
      </ul>
    </div>
  )
}

export default App