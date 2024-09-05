import Part from './Part'

const Content = ({parts})=>{
    const total = parts.reduce((acc, curr) => (acc))

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