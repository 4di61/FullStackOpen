import { useState } from 'react'

const Note = ({note}) => (
  <li key: {note.id>{note.content}</li>
)
const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note note = {note}/>
        ))}
      </ul>
    </div>
  )
}

export default App