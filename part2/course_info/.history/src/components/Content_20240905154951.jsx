import Part from './Part'

const Content = ({parts})=>{
    const total = parts.reduce((acc, curr) => (acc+curr.exercises))

    return (
    <>
    {parts.map((part) => (
        <Part key={part.id} part = {part}/>
    ))}
    <b>total of {total} exercises</b>
    </>
    )
  }

  export default Content