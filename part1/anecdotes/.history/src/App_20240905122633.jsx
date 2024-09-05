import { useState } from 'react'

const Button = ({onCLick, text})=>(
  <button onClick = {onCLick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const copy = [...points]
  const setRandomSelection = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const incrementVote = (selected)=>(
    ()=>{
    copy[selected]++
    setPoints(copy)
    }
)

  const getMaxVotedAnecdoteIndex = ()=>{
    const maxIndex = copy.reduce((acc,curr,index)=>
      (curr>copy[acc]?index:acc),0)
    return maxIndex
  }
  maxIndex = 
  return (
    <div>
    <div>
      <h2>Anecdote of the day</h2>
      <p>
      {anecdotes[selected]}
      <br />
      has {copy[selected]} votes
      </p>
      <Button onCLick={incrementVote(selected)} text = "Vote"/>
      <Button onCLick={setRandomSelection} text = "Next Anecdote"/>
    </div>
    <div>
      <h2>Anecdote with the most votes</h2>
      {anecdotes[getMaxVotedAnecdoteIndex()]}
      <br />
      has {copy[selected]} votes
    </div>
    </div>
  )
}

export default App