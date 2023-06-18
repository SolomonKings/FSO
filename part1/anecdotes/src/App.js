import { useState } from 'react'

const BestAnecdote = ({anecdotes, vote}) => {
  const bestVote = Math.max(...vote)
  const indexBest = vote.indexOf(bestVote)
  if (bestVote === 0) {
    return (
      <p>No votes yet</p>
    )
  } else {
    return(
      <div>
      <p>{anecdotes[indexBest]}</p>
      <p>has {bestVote} votes </p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const handleVoting = () => {
    const votes = [...vote]
    votes[selected] +=1
    setVote(votes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVoting}>vote</button>
      <button onClick={handleSelection}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <BestAnecdote anecdotes = {anecdotes} vote = {vote} />
    </div>
  )
}

export default App