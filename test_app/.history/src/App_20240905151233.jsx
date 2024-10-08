import { useState } from 'react'
const Note = () => (
  <li>{note.content}</li>
)
const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key = {note.id}>
            {note.content}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App