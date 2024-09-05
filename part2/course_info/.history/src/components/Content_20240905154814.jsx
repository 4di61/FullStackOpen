import Part from './Part'

const Content = ({parts})=>{
    return (
    <>
    {parts.map((part) => (
        <Part key={part.id} part = {part}/>
    ))}
    <b>total of {} exercises</b>
    </>
    )
  }

  export default Content